import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema } from './model/class.model';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/user/jwt.constants';
import { CommentSchema } from 'src/comment/model/comment.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Class', schema: ClassSchema },
      { name: 'Comment', schema: CommentSchema },
    ]),

    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
