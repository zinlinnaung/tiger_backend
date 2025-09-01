import { Module } from '@nestjs/common';

import { InvitedPeopleController } from './invite.controller';
import { InvitedPeopleService } from './invite.service';

@Module({
  controllers: [InvitedPeopleController],
  providers: [InvitedPeopleService],
  exports: [InvitedPeopleService],
})
export class InvitedPeopleModule {}
