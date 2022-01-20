import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comment: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  id_class: string;
}
