import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PasswordDto, UserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';

import { Users } from 'generated/client';
import { PrismaClientKnownRequestError } from 'generated/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  private async hash_password(pw: string): Promise<string> {
    return await argon.hash(pw);
  }

  async create_user(userDto: UserDto): Promise<Users> {
    const user = await this.prisma.users.findUnique({
      where: {
        email: userDto.email,
      },
    });

    if (user)
      throw new HttpException('Email already exist.', HttpStatus.BAD_REQUEST);

    const new_user = await this.prisma.users.create({
      data: {
        ...userDto,
        password: await this.hash_password(userDto.password),
      },
    });
    if (!new_user) {
      throw new HttpException('Fail to create user', HttpStatus.BAD_REQUEST);
    }
    return new_user;
  }
  private async verifyPassword(
    userId: number,
    password: string,
  ): Promise<boolean> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return false; // User not found
    }

    return await argon.verify(user.password, password);
  }

  async changePassword(userId: number, data: PasswordDto) {
    const { currentPassword, newPassword } = data;

    const isPasswordValid = await this.verifyPassword(userId, currentPassword);

    if (!isPasswordValid) {
      throw new BadRequestException('Current password is incorrect.');
    }

    const hashedNewPassword = await this.hash_password(newPassword);

    try {
      const updatedUser = await this.prisma.users.update({
        where: {
          id: userId,
        },
        data: {
          password: hashedNewPassword,
        },
      });

      delete updatedUser.password;
      return updatedUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('Email already taken.');
        }
      } else {
        throw error;
      }
    }
  }

  async get_all_user() {
    const users = await this.prisma.users.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        is_active: true,
        created_at: true,
        updated_at: true,
      },
    });
    return users;
  }

  async get_user_by_id(user_id: number) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }
    delete user.password;
    return user;
  }

  async update(user_id: number, data) {
    try {
      const updated_user = await this.prisma.users.update({
        where: {
          id: user_id,
        },
        data: {
          ...data,
        },
      });
      delete updated_user.password;
      return updated_user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('Email already taken.');
        }
      } else {
        throw error;
      }
    }
  }

  async deactivate_user(user_id: number) {
    const deactivated_user = await this.update(user_id, {
      is_active: false,
    });
    return deactivated_user;
  }

  async activate_user(user_id: number) {
    const activated_user = await this.update(user_id, { is_active: true });
    return activated_user;
  }
}
