import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

import { JwtModule } from '@nestjs/jwt';
import { RtStrategy } from './strategies/rt.strategy';
import { AtStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, RtStrategy, AtStrategy],
})
export class AuthenticationModule {}
