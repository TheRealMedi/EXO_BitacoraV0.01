import { Schema, model } from "mongoose";

const plantaSchema = new Schema({
  cedulaEjecu: String,
  nombEjecu: String,
  coordina: String,
  direct: String,
  cargo: String
});

export default model('plantaSalvo', plantaSchema);