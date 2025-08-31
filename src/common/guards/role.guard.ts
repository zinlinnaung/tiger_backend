import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Get roles set in meta data
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    // If not any roles is set it's anyone can access.
    if (!roles) return true;
    // get request object
    const request = context.switchToHttp().getRequest();
    // access the payload from request
    const payload = request.user;
    // check if they have access
    return roles.includes(payload.role);
  }
}
