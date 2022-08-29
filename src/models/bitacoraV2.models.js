import { Schema, model } from "mongoose";

const bitacoraV2Schema = new Schema({
    docTipo: [{type: mongoose.Schema.Types.ObjectId, ref: 'tipoDocumento'}],
    numTipo: String,
    nombreCli: String,
    celular: String,
    pagad: [{type: mongoose.Schema.Types.ObjectId, ref: 'pagadurias'}],
    montSolici: Number,
    montApro: Number,
    plazo: Number,
    modal: [{type: mongoose.Schema.Types.ObjectId, ref: 'modalidad'}],
    cedulEjecu: String,
    nombEjecu: String,
    coordina: String,
    direct: String,
    //Fin Primer Estado
    bancSegu: Boolean,
    tasa: String,
    codOfiDesemb: Number,
    ofiDesem : [{type: mongoose.Schema.Types.ObjectId, ref: 'oficinaDesembolso'}],
    ciudad: String,
    zona: String,
    estadRadic: [{type: mongoose.Schema.Types.ObjectId, ref: 'estadoRadicacion'}],
    tipoProce: [{type: mongoose.Schema.Types.ObjectId, ref: 'tipoProceso'}],
    periodo: new Date(),
    fechRadica: new Date(),
    comprAfectDesp: Boolean,
    entidaCompr: [{type: mongoose.Schema.Types.ObjectId, ref: 'pagadurias'}],
    tipoProdCom: [{type: mongoose.Schema.Types.ObjectId, ref: 'tipoProductoCompra'}],
    numObligComp: Number,
    //Fin Segundo Estado
    fechDevNeg: new Date(),
    fechNoV: new Date(),
    fechDes: new Date(),
    numCaus: Number,
    causal: String,
    obsDevNeg: String,
    pazSalvo: [{type: mongoose.Schema.Types.ObjectId, ref: 'tipoDocumento'}],
    soportPag: String,
    obsLegal: String,
    segment: String,
    tipoContr: Boolean,
    estadContr: Boolean,
    cargo: Boolean,
    fechaIngr: new Date()
    //Fin Tercer Estado
});

export default model('bitacoraV2', bitacoraV2Schema);