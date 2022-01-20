import { User } from '../model/user.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

// entrada
export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}

// resposta
export class AuthResponse {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  token: string;

  @IsNotEmpty()
  @ApiProperty()
  user: User;
}
