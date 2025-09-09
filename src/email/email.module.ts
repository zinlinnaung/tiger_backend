import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host:
            configService.get<string>('EMAIL_HOST') || 'mail.privateemail.com',
          port: parseInt(configService.get<string>('EMAIL_PORT'), 10) || 587,
          secure: configService.get<string>('EMAIL_SECURE') === 'true', // true for port 465 (SSL)
          auth: {
            user:
              configService.get<string>('EMAIL_USER') ||
              'rsvp@tigerinvites.com',
            pass: 'Hun!@#Lin92', // your Private Email password
          },
        },
        defaults: {
          from:
            configService.get<string>('EMAIL_FROM') ||
            `"Tiger Invites" <${configService.get<string>('EMAIL_USER') || 'rsvp@tigerinvites.com'}>`,
        },
        template: {
          dir: join(__dirname, './templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
