const bitacoraV1Ctlr = {};
import bitacoraV1 from '../models/bitacoraV1.models.js';

bitacoraV1Ctlr.crear = async (req, res) => {
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
        fechaIngr
    } = req.body

    const NuevaBitacora = new bitacoraV1({

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
        fechaIngr
    });

    const respuesta = await NuevaBitacora.save()
    res.json({

        mensaje: 'Usuario Creado con exito',
        respuesta
    })


}