import { Schema, model } from "mongoose";

const pagaduriasSchema = new Schema({
  id: number,
  pagad: String,
});

export default model('pagadurias', pagaduriasSchema);