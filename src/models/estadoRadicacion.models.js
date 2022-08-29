import { Schema, model } from "mongoose";

const estadoRadicacionSchema = new Schema({
  id: number,
  estadRadic: String,
});

export default model('estadoRadicacion', estadoRadicacionSchema);