import { Schema, model } from "mongoose";

const oficinaDesembolsoSchema = new Schema({
  codOfiDesem: number,
});

export default model('oficinaDesembolso', oficinaDesembolsoSchema);