import { Schema, model } from "mongoose";

const tipoProductoComSchema = new Schema({
  id: number,
  tipoProdCom: String,
});

export default model('tipoProductoCompra', tipoProductoComSchema);