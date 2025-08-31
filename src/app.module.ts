import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
// import { CustomerModule } from './customer/customer.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards/at.guard';

import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ScheduleModule } from '@nestjs/schedule';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({
      dest: './uploads', // Specify the destination directory here
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    UserModule,
    AuthenticationModule,
    EmailModule,

    // CustomerModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule {}
