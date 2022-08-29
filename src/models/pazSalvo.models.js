import { Schema, model } from "mongoose";

const pazSalvoSchema = new Schema({
  id: number,
  pazSalvo: String,
});

export default model('pazSalvo', pazSalvoSchema);