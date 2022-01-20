import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto, AuthResponse } from './dto/login.dto';
import { User } from './model/user.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Cadastrar um usuário',
  })
  async create(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.create(data);
  }

  @Get('findAll')
  @ApiOperation({
    summary: 'Listar os usuários cadastrados',
  })
  async findAll(): Promise<any[]>{
    return await this.userService.findAll();
  }

  // @Post('users')
  // @ApiOperation({
  //   summary: 'Logar com um usuário',
  // })
  // login(@Body() data: LoginDto): Promise<AuthResponse> {
  //   return this.userService.login(data);
  // }
}
