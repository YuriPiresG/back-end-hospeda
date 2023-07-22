import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';
import { IsNotEmpty, IsString, IsEnum, IsDate } from 'class-validator';
import { Privacy } from '../constants/privacy.constant';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(Privacy)
  privacy: Privacy;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  streetNumber: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsString()
  additionalInfo?: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsDate()
  initialDate: Date;

  @IsNotEmpty()
  @IsDate()
  initialHour: Date;
}
