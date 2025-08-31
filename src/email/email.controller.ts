// src/email/email.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { Public } from 'src/common/decorators';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { AlertEmailDto, CheckCodeDto, EmailDto } from './dto';

@ApiTags('Email')
@Controller('email') // changed from 'Email' to 'email' for consistency
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Public()
  @Post('send') // changed from 'send-cool-email' to 'send-email'
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async sendEmail(@Body() emailDto: EmailDto) {
    // try {
    await this.emailService.sendMailWithBody(emailDto, emailDto.context);
    return { success: true, message: 'Email sent successfully' };
    // } catch (error) {
    //   return {
    //     success: false,
    //     message: 'Failed to send email',
    //     error: error.message,
    //   };
    // }
  }
  // @Public()
  // @ApiBearerAuth()
  // @HttpCode(HttpStatus.OK)
  // @Post('forgot-password')
  // async forgotPassword(@Body() email: AlertEmailDto) {
  //   await this.emailService.sendPasswordResetEmail(email);
  //   return { message: 'Password reset email sent' };
  // }
  @Public()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Post('forgot-password')
  async forgotPassword(@Body() email: AlertEmailDto) {
    await this.emailService.checkAndSendResetMail(email);
    return { message: 'Password reset email sent' };
  }

  @Public()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Post('code/check')
  async checkCode(@Body() checkCodeDto: CheckCodeDto) {
    return await this.emailService.checkResetCode(checkCodeDto);
  }
  @Public()
  @Get('/paginate')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async getAllAlertEmailsPaginate(
    @Query('page', ParseIntPipe) page: number,
    @Query('rows_per_page', ParseIntPipe) rows_per_page: number,
  ) {
    return this.emailService.find_all_alert_emails_paginate(
      page,
      rows_per_page,
    );
  }
  @Public()
  @Post('/create')
  @HttpCode(HttpStatus.OK)
  create_particepent(@Body() alertEmailDto: AlertEmailDto) {
    return this.emailService.create_alert_mail(alertEmailDto);
  }
  @Public()
  @Get('/all')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async getAllAlertEmails() {
    return this.emailService.get_all_alert_emails();
  }

  @Public()
  @ApiResponse({
    description: 'Alert email retrieved successfully',
    status: 200,
    type: AlertEmailDto,
  })
  @Get(':emailId')
  @HttpCode(HttpStatus.OK)
  async getAlertEmailById(@Param('emailId', ParseIntPipe) emailId: number) {
    try {
      return await this.emailService.get_alert_email_by_id(emailId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Alert email not found');
      } else {
        throw new InternalServerErrorException(
          'Failed to retrieve alert email',
        );
      }
    }
  }

  @Public()
  @ApiResponse({
    description: 'Alert email updated successfully',
    status: 200,
    type: AlertEmailDto,
  })
  @Put(':emailId/update')
  @HttpCode(HttpStatus.OK)
  async updateAlertEmail(
    @Param('emailId', ParseIntPipe) emailId: number,
    @Body() alertEmailDto: AlertEmailDto,
  ) {
    try {
      return await this.emailService.update_alert_email(emailId, alertEmailDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Alert email not found');
      } else {
        throw new InternalServerErrorException('Failed to update alert email');
      }
    }
  }

  @Public()
  @Delete(':emailId/delete')
  @HttpCode(HttpStatus.OK)
  async deleteAlertEmail(@Param('emailId', ParseIntPipe) emailId: number) {
    try {
      await this.emailService.delete_alert_email(emailId);
      return { message: 'Alert email deleted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Alert email not found');
      } else {
        throw new InternalServerErrorException('Failed to delete alert email');
      }
    }
  }

  @Public()
  @Get(':email/check')
  @HttpCode(HttpStatus.OK)
  async checkEmailExists(@Param('email') email: string) {
    return this.emailService.check_email_exists(email);
  }
}
