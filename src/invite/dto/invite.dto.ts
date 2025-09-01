import { IsString, IsBoolean, IsOptional, IsEmail } from 'class-validator';

export class CreateInvitedPeopleDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  additional_guest?: boolean;

  @IsOptional()
  @IsString()
  additional_guest_name?: string;
}

export class UpdateInvitedPeopleDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsBoolean()
  additional_guest?: boolean;

  @IsOptional()
  @IsString()
  additional_guest_name?: string;

  @IsOptional()
  @IsBoolean()
  confirmed?: boolean;
}
