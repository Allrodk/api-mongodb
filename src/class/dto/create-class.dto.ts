import { IsString, IsInt, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  video: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  total_comments: number;

  // @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  data_init: Date;

  // @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  data_end: Date;
}
