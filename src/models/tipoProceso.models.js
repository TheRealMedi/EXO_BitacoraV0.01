import { Schema, model } from "mongoose";

const tipoProcesoSchema = new Schema({
  id: number,
  tipoProce: String,
});

export default model('tipoProceso', tipoProcesoSchema);