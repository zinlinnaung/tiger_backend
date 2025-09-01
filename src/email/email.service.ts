import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { AlertEmailDto, CheckCodeDto, EmailDto, ContextDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlertEmail } from 'generated/client';
import { UserDto } from 'src/user/dto';

@Injectable()
export class EmailService {
  private transporter;

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
    private prisma: PrismaService,
  ) {}

  async create_alert_mail(alertEmailDto: AlertEmailDto): Promise<AlertEmail> {
    // const currentDate = new Date();

    // // Set time of currentDate to midnight to compare with lastLoginDate
    // currentDate.setHours(0, 0, 0, 0);
    const email = await this.prisma.alertEmail.findUnique({
      where: {
        email: alertEmailDto.email,
      },
    });

    if (email)
      throw new HttpException('Email already exit', HttpStatus.BAD_REQUEST);

    const new_email = await this.prisma.alertEmail.create({
      data: {
        ...alertEmailDto,
      },
    });
    if (!new_email) {
      throw new HttpException(
        'Fail to create alert email',
        HttpStatus.BAD_REQUEST,
      );
    }
    return new_email;
  }
  async get_all_alert_emails(): Promise<AlertEmail[]> {
    return this.prisma.alertEmail.findMany();
  }

  // Retrieve an alert email by ID
  async get_alert_email_by_id(emailId: number): Promise<AlertEmail> {
    const alertEmail = await this.prisma.alertEmail.findUnique({
      where: { id: emailId },
    });

    if (!alertEmail) {
      throw new NotFoundException('Alert email not found');
    }

    return alertEmail;
  }

  // Update an alert email by ID
  async update_alert_email(
    emailId: number,
    alertEmailDto: AlertEmailDto,
  ): Promise<AlertEmail> {
    const existingEmail = await this.prisma.alertEmail.findUnique({
      where: { id: emailId },
    });

    if (!existingEmail) {
      throw new NotFoundException('Alert email not found');
    }

    const updatedEmail = await this.prisma.alertEmail.update({
      where: { id: emailId },
      data: { ...alertEmailDto },
    });

    return updatedEmail;
  }

  // Delete an alert email by ID
  async delete_alert_email(emailId: number): Promise<void> {
    const existingEmail = await this.prisma.alertEmail.findUnique({
      where: { id: emailId },
    });

    if (!existingEmail) {
      throw new NotFoundException('Alert email not found');
    }

    await this.prisma.alertEmail.delete({
      where: { id: emailId },
    });
  }

  // Retrieve all alert emails with pagination
  async find_all_alert_emails_paginate(page: number, rows_per_page: number) {
    const [total, records] = await this.prisma.$transaction([
      this.prisma.alertEmail.count(),
      this.prisma.alertEmail.findMany({
        take: rows_per_page,
        skip: page * rows_per_page,
        orderBy: { id: 'desc' },
      }),
    ]);
    return { total, records };
  }

  // Check if an email exists
  async check_email_exists(email: string): Promise<{ status: boolean }> {
    const existingEmail = await this.prisma.alertEmail.findUnique({
      where: { email },
    });

    return { status: !!existingEmail };
  }

  async getEmailsString(
    data: {
      id: number;
      email: string;
      created_at: Date;
      updated_at: Date;
    }[],
  ): Promise<string> {
    // Extract emails from the input data
    const emails = data.map((item) => item.email);

    // Combine the emails into a single string separated by commas
    return emails.join(',');
  }

  async sendMailWithBody(emailDto: EmailDto, context: ContextDto) {
    try {
      const result = await this.mailerService.sendMail({
        to: emailDto.to,
        from: this.configService.get<string>('EMAIL_FROM'),
        subject: emailDto.subject,
        template: 'alertmail',
        context,
      });

      return result;
    } catch (error) {
      if (error.response?.statusCode === 400) {
        throw new BadRequestException(
          'Invalid email address or request format.',
        );
      }

      throw new InternalServerErrorException(
        'Failed to send email. Please try again later.',
      );
    }
  }
  async generateCode() {
    const resetCode = Math.random().toString(36).substring(2, 7); // Generate a random reset code
    return resetCode.toUpperCase();
  }

  async sendPasswordResetEmail(userEmail: AlertEmailDto, resetCode: string) {
    // const resetCode = await this.generateCode();
    const subject = 'Password Reset Request';
    const template = 'reset-password';
    const context = { resetCode };
    await this.mailerService.sendMail({
      to: userEmail.email,
      from: this.configService.get<string>('EMAIL_USER'),
      subject,
      template: 'resetcode',
      context,
    });
  }

  async checkAndSendResetMail(mail: AlertEmailDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        email: mail.email,
      },
    });
    if (!user) {
      throw new NotFoundException('Email not found');
    }
    const resetCode = await this.generateCode();
    const updatedUser = await this.prisma.users.update({
      where: {
        email: user.email,
      },
      data: {
        reset_code: resetCode,
      },
    });
    if (updatedUser.reset_code != null) {
      await this.sendPasswordResetEmail(mail, resetCode);
    } else {
      throw new HttpException(
        'Fail to sent reset email',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async checkResetCode(checkCodeDto: CheckCodeDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        email: checkCodeDto.email,
      },
    });
    if (!user) {
      throw new NotFoundException('Email not found');
    }
    console.log(user.reset_code);
    console.log(checkCodeDto.code);
    if (user.reset_code === checkCodeDto.code) {
      return { status: true };
    } else {
      return { status: false };
    }
  }
}
