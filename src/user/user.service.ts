import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto, AuthResponse } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './model/user.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwt: JwtService,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const newUser = await this.userModel.findOne({
      $or: [{ email: data.email }, { cpf: data.cpf }],
    });
    // if (newUser) {
    //   throw new ConflictException('Email ou CPF já cadastrados');
    // }
    return await new this.userModel(data).save();
  }

  async findAll(): Promise<any[]> {
    const userList = await this.userModel.find();
    return userList;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  // async create(data: CreateUserDto): Promise<User> {
  //   let user = await this.userModel.findOne({ email: data.email });
  //   if (user) {
  //     throw new ConflictException('E-mail já cadastrado');
  //   }

  //   const hashedPassword = await bcrypt.hash(data.password, 8);
  //   data.password = hashedPassword;
  //   user = await new this.userModel(data).save();
  //   user = await this.userModel
  //     .findOne({ email: data.email })
  //     .select('-password');
  //   console.log(user);
  //   return user;
  // }

  // async login(data: LoginDto): Promise<AuthResponse> {
  //   const { email, password } = data;
  //   let user = await this.userModel.findOne({ email: email });
  //   if (!user) {
  //     throw new NotFoundException('E-mail ou senha inválidos');
  //   }
  //   const hashValid = await bcrypt.compare(password, user.password.toString());
  //   if (!user || !hashValid) {
  //     throw new UnauthorizedException('E-mail ou senha inválidos');
  //   }
  //   user = await this.userModel.findOne({ email: email }).select('-password');

  //   return {
  //     token: this._createToken(user),
  //     user,
  //   };
  // }

  // private _createToken({ email }): any {
  //   const user: JwtPayload = { email };
  //   const accessToken = this.jwt.sign(user);
  //   console.log(accessToken);
  //   return accessToken;
  // }
}
