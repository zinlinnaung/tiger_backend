import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // adjust path
import {
  CreateInvitedPeopleDto,
  UpdateInvitedPeopleDto,
} from './dto/invite.dto';

@Injectable()
export class InvitedPeopleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateInvitedPeopleDto, userId?: number) {
    try {
      return await this.prisma.invitedPeople.create({
        data: {
          ...data,
          created_by: userId,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Phone or Email already exists.');
      }
      throw new BadRequestException('Failed to create invited person.');
    }
  }

  async findAll() {
    return await this.prisma.invitedPeople.findMany({
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(id: number) {
    const person = await this.prisma.invitedPeople.findUnique({
      where: { id },
    });
    if (!person)
      throw new NotFoundException(`Invited person with id ${id} not found.`);
    return person;
  }

  async update(id: number, data: UpdateInvitedPeopleDto, userId?: number) {
    try {
      await this.findOne(id); // ensures it exists
      return await this.prisma.invitedPeople.update({
        where: { id },
        data: {
          ...data,
          updated_by: userId,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Phone or Email already exists.');
      }
      throw new BadRequestException(
        `Failed to update invited person with id ${id}.`,
      );
    }
  }

  async remove(id: number) {
    await this.findOne(id); // ensures it exists
    return await this.prisma.invitedPeople.delete({ where: { id } });
  }
}
