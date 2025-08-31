import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'generated/client';
import { Observable } from 'rxjs';

@Injectable()
export class InternalGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // get request object
    const request = context.switchToHttp().getRequest();
    // access the payload from request
    const payload = request.user;
    // check if they have access
    return [Role.Admin].includes(payload.role);
  }
}
