import { Schema, model } from "mongoose";

const causalSchema = new Schema({
  numCausal: number,
  causal: String,
});

export default model('causales', causalSchema);