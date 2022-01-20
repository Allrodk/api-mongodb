import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';
import { CommentModule } from './comment/comment.module';

require('dotenv').config({ path: './.env' });
console.log('process.env.PORT', process.env.DB_URL);
@Module({
  imports: [UserModule, MongooseModule.forRoot(process.env.DB_URL), ClassModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
