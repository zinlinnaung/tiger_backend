import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// refresh token guard
@Injectable()
export class RtGuard extends AuthGuard('jwt-refresh') {
  constructor() {
    super();
  }
}
