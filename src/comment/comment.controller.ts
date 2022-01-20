import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@ApiTags('comment')
@Controller('classes')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(AuthGuard())
  @Post('comments')
  @ApiOperation({
    summary: 'Cadastrar um comentário de uma aula',
  })
  @ApiBearerAuth()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @UseGuards(AuthGuard())
  @Get('comments')
  @ApiOperation({
    summary: 'Listar todos os comentários de uma aula',
  })
  @ApiBearerAuth()
  findAll(){
    return this.commentService.findAll();
  }
 
}
