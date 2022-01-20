import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './model/comment.model';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private readonly commentModel: Model<Comment>,
  ) {}

  async create(data: CreateCommentDto): Promise<Comment> {
    const newComment = new this.commentModel(data);
    return await newComment.save();
  }

  async findAll(){
    return await this.commentModel.find().populate('comments');
  }  
}
