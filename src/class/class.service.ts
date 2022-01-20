import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Model } from 'mongoose';
import { Class } from './model/class.model';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel('Class') private readonly classModel: Model<Class>,
  ) {}
  async create(data: CreateClassDto): Promise<Class> {
    let classExist = await this.classModel.findOne({ name: data.name });
    if (classExist) {
      throw new ConflictException('Aula já cadastrada com esse nome');
    }
    classExist = await new this.classModel(data).save();

    console.log(classExist);
    return classExist;
  }

  async findAll(): Promise<any[]> {
    const pageLimit = 50;
    const classes = await this.classModel.find().limit(pageLimit);

    const classesJson = JSON.parse(JSON.stringify(classes));
    await Promise.all(
      classesJson.map(async (item) => {
        console.log();
        item['last_comment'] = 'lastComment';
      }),
    );

    return classesJson;
  }
 

  async findOne(id: number): Promise<Class> {
    const classExist = await this.classModel.findById(id);
    if (!classExist) {
      throw new ConflictException('Aula não encontrada');
    }
    return classExist;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
