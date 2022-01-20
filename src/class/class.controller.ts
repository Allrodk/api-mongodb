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
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './model/class.model';
@ApiTags('classes')
@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @UseGuards(AuthGuard())
  @Post()
  @ApiOperation({
    summary: 'Criar uma nova aula',
  })
  @ApiBearerAuth()
  create(@Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classService.create(createClassDto);
  }

  @UseGuards(AuthGuard())
  @Get()
  @ApiOperation({
    summary: 'Listar aulas cadastradas',
  })
  @ApiBearerAuth()
  findAll(): Promise<any[]> {
    return this.classService.findAll();
  }

  @UseGuards(AuthGuard())
  @Get(':id')
  @ApiOperation({
    summary: 'Obter detalhes de uma aula pelo o id ',
  })
  @ApiBearerAuth()
  findOne(@Param('id') id: string): Promise<Class> {
    return this.classService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(+id, updateClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classService.remove(+id);
  }
}
