import * as mongoose from 'mongoose';
import { ClassSchema } from 'src/class/model/class.model';

export const CommentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  date_created: { type: Date, default: Date.now },
  id_class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
});

export interface Comment {
  id: String;
  comment: String;
  date_created: String;
  id_class: String;
}
