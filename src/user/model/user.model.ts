import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  zipCode: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String, required: true },
  birthDate: { type: Date, required: true },
  cpf: { type: String, required: true },
  rendaMensal: { type: Number, required: true },
});

export interface User {
  name: String;
  lastName: String;
  email: String;
  phone: String;
  zipCode: String;
  address1: String;
  address2: String;
  birthDate: Date;
  cpf: String;
  rendaMensal: Number;
}
