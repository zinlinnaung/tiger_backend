import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { InvitedPeopleService } from './invite.service';
import {
  CreateInvitedPeopleDto,
  UpdateInvitedPeopleDto,
} from './dto/invite.dto';
import { Public } from 'src/common/decorators';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('invited-people')
export class InvitedPeopleController {
  constructor(private readonly invitedPeopleService: InvitedPeopleService) {}

  @Public()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Body() dto: CreateInvitedPeopleDto) {
    return this.invitedPeopleService.create(dto);
  }

  @Public()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.invitedPeopleService.findAll();
  }

  @Public()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.invitedPeopleService.findOne(id);
  }

  @Public()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateInvitedPeopleDto,
  ) {
    return this.invitedPeopleService.update(id, dto);
  }

  @Public()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.invitedPeopleService.remove(id);
  }
}
