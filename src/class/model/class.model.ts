import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  video: { type: String, required: true },
  total_comments: { type: Number, required: true },
  data_init: { type: Date, required: true },
  data_end: { type: Date, required: true },
  date_created: { type: Date, default: Date.now },
  date_updated: { type: Date, default: Date.now },
});

export interface Class {
  _id: String;
  name: String;
  description: String;
  video: String;
  total_comments: Number;
  data_init: Date;
  data_end: Date;
  date_created: Date;
  date_updated: Date;
}
