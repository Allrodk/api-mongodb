import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsNumber,
  IsDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: String;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @ApiProperty()
  phone: String;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  zipCode: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address1: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address2: String;

  // @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  birthDate: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @ApiProperty()
  cpf: String;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  rendaMensal: Number;
}
