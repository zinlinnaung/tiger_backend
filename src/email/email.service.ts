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
import * as dns from 'dns';
import { UserDto } from 'src/user/dto';
import { isEmail } from 'class-validator';
import { promisify } from 'util';

const dnsResolveMx = promisify(dns.resolveMx);
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

  async sendMailWithBody(emailDto: any, context: any) {
    // Validate email format
    if (!isEmail(emailDto.to)) {
      throw new BadRequestException('Invalid email address format');
    }

    // Validate domain exists
    const domain = emailDto.to.split('@')[1];
    try {
      await this.validateEmailDomain(domain);
    } catch (error) {
      throw new BadRequestException('Invalid email domain');
    }

    // Build plain-text version
    const plainText = this.buildPlainTextEmail(context);

    // Build HTML version (instead of template)
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>${emailDto.subject}</h2>
        <p>Hello,</p>
        <p>${context.message}</p>
        <div style="margin-top: 20px;">
          <a href="https://tigerinvites.com/edit?id=${context.id}" 
             style="display:inline-block;padding:10px 20px;background:#007bff;color:#fff;
                    border-radius:6px;text-decoration:none;">
            Edit Invitation
          </a>
        </div>
        <hr />
        <small>If you no longer wish to receive these emails, 
          <a href="https://tigerinvites.com/unsubscribe?id=${context.id}">unsubscribe</a>.
        </small>
      </div>
    `;

    // Headers
    const headers = {
      'List-Unsubscribe': `<https://tigerinvites.com/unsubscribe?id=${context.id}>`,
      Precedence: 'bulk',
      'X-Priority': '3',
      'X-Mailer': 'TigerInvites Mailer',
      'X-Auto-Response-Suppress': 'All',
      'Return-Path': '<rsvp@tigerinvites.com>',
      'Message-ID': `<${context.id}@tigerinvites.com>`,
    };

    const result = await this.mailerService.sendMail({
      to: emailDto.to,
      from: this.configService.get<string>('EMAIL_FROM'),
      subject: emailDto.subject,
      text: plainText, // plain text version
      html: htmlBody, // html version (instead of template)
      headers,
    });

    return result;
  }

  private buildPlainTextEmail(context: any): string {
    return `
Dear ${context.guestName},

Thank you for confirming your attendance. We're excited to have you join us for ${context.eventName}.

EVENT DETAILS:
- Date: ${context.eventDate}
- Time: ${context.eventTime}
- Venue: ${context.eventVenue}

You can edit or update your details here: https://tigerinvites.com/edit?id=${context.id}

If you wish to unsubscribe from future emails, please visit: https://tigerinvites.com/unsubscribe?id=${context.id}

Best regards,
${context.organizerName}
Tiger Invites Team
    `.trim();
  }

  private async validateEmailDomain(domain: string): Promise<boolean> {
    try {
      const mxRecords = await dnsResolveMx(domain);
      return mxRecords && mxRecords.length > 0;
    } catch (error) {
      // If MX record check fails, try alternative check
      try {
        await dns.promises.resolve(domain);
        return true;
      } catch (secondError) {
        throw new Error(`Domain ${domain} does not exist`);
      }
    }
  }

  // Additional method to send test emails
  async sendTestEmail(to: string) {
    const testContext = {
      guestName: 'Test User',
      eventName: 'Sample Event',
      eventDate: new Date().toLocaleDateString(),
      eventTime: '2:00 PM',
      eventVenue: 'Test Venue',
      organizerName: 'Test Organizer',
      id: 'test-id-123',
    };

    return this.sendMailWithBody(
      { to, subject: 'Test Email from Tiger Invites' },
      testContext,
    );
  }

  // Method to check email service status
  async checkServiceStatus(): Promise<{ status: string; message: string }> {
    try {
      // Try to resolve the SMTP host to check connectivity
      const emailHost = this.configService.get<string>('EMAIL_HOST');
      await dns.promises.resolve(emailHost);

      return {
        status: 'OK',
        message: `Email service is configured correctly. SMTP host: ${emailHost}`,
      };
    } catch (error) {
      return {
        status: 'ERROR',
        message: `Email service configuration issue: ${error.message}`,
      };
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
