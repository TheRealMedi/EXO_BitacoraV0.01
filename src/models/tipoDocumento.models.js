import { Schema, model } from "mongoose";

const tipoDocumentoSchema = new Schema({
  id: number,
  docTipo: String,
});

export default model('tipoDocumento', tipoDocumentoSchema);