import { Schema, model } from "mongoose";

const modalidadSchema = new Schema({
  id: number,
  modal: String,
});

export default model('modalidad', modalidadSchema);