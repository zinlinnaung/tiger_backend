import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationDto } from './dto/authentication.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthenticationToken } from './type';
import { GetCurrentUserId } from 'src/common/decorators/getCurrentUserId.decorator';
import { Public } from 'src/common/decorators';
import { GetPayload } from 'src/common/decorators/getPayload.decorator';
import { RtGuard } from 'src/common/guards';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() authDto: AuthenticationDto): Promise<AuthenticationToken> {
    return this.authService.login(authDto);
  }

  @Public()
  @Post('/i/login')
  @HttpCode(HttpStatus.OK)
  internal_login(
    @Body() authDto: AuthenticationDto,
  ): Promise<AuthenticationToken> {
    return this.authService.internal_login(authDto);
  }

  @Post('refresh')
  @Public()
  @UseGuards(RtGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  refresh_Token(
    @GetCurrentUserId() userId: number,
    @GetPayload('refresh_token') rt: string,
  ): Promise<AuthenticationToken> {
    return this.authService.refresh(userId, rt);
  }
}
