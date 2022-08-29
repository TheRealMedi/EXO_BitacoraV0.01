const bitacoraV2Ctlr = {};
import bitacoraV2 from "../models/bitacoraV2.models.js";

bitacoraV2Ctlr.crear = async (req, res) => {
  const {
    numTipo,
    docTipo,
    nombreCli,
    correo,
    pagad,
    bancSegu,
    celular,
    tasa,
    codOfiDesemb,
    ofiDesem,
    montSolici,
    montApro,
    plazo,
    modal,
    comprAfectDesp,
    entidaCompr,
    tipoProdCom,
    numObligComp,
    cedulEjecu,
    nombEjecu,
    coordina,
    direct,
    ciudad,
    zona,
    estadRadic,
    tipoProce,
    periodo,
    fechRadica,
    fechDevNeg,
    fechNoV,
    fechDes,
    numCaus,
    causal,
    obsDevNeg,
    pazSalvo,
    soportPag,
    obsLegal,
    segment,
    tipoContr,
    estadContr,
    cargo,
    fechaIngr,
  } = req.body;

  const NuevaBitacora = new bitacoraV2({
    numTipo,
    docTipo,
    nombreCli,
    correo,
    pagad,
    bancSegu,
    celular,
    tasa,
    codOfiDesemb,
    ofiDesem,
    montSolici,
    montApro,
    plazo,
    modal,
    comprAfectDesp,
    entidaCompr,
    tipoProdCom,
    numObligComp,
    cedulEjecu,
    nombEjecu,
    coordina,
    direct,
    ciudad,
    zona,
    estadRadic,
    tipoProce,
    periodo,
    fechRadica,
    fechDevNeg,
    fechNoV,
    fechDes,
    numCaus,
    causal,
    obsDevNeg,
    pazSalvo,
    soportPag,
    obsLegal,
    segment,
    tipoContr,
    estadContr,
    cargo,
    fechaIngr,
  });
  const cedulaUsuario = await bitacoraV2.findOne({ numTipo: numTipo });
  if (cedulaUsuario) {
    res.json({
      mensaje: "El correo ya existe",
    });
  } else {
  }

  const respuesta = await NuevaBitacora.save();
  res.json({
    mensaje: "Usuario Creado con exito",
    respuesta,
  });
};

module.exports = bitacoraV2Ctlr;
