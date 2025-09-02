import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ContextDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  guestName: string;

  @IsString()
  @IsNotEmpty()
  eventName: string;

  @IsString()
  @IsNotEmpty()
  eventDate: string;

  @IsString()
  @IsNotEmpty()
  eventTime: string;

  @IsString()
  @IsNotEmpty()
  eventVenue: string;

  @IsString()
  @IsNotEmpty()
  organizerName: string;
}

// model AlertEmail {
//   id         Int       @id @default(autoincrement())
//   email      String
//   created_at DateTime  @default(now())
//   updated_at DateTime  @updatedAt
//   Settings   Settings? @relation(fields: [settingsId], references: [id])
//   settingsId Int?
// }
export class AlertEmailDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class CheckCodeDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}

export class EmailDto {
  @IsString()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  @Type(() => ContextDto)
  context: ContextDto;

  // @IsEnum(Role)
  // @IsNotEmpty()
  // role: Role;

  // @IsBoolean()
  // is_active: boolean;
}
