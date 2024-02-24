const { raw } = require('../data_base/functions');
const Marcacion = require('../models/Marcacion');
const MarcacionService = require('../services/MarcacionService');
const MarcacionResource = require('../resources/MarcacionResource');

exports.getMarcaciones = async (req, res) => {
    const userId = req.params.id;
    const { ddmmyyyy, yyyymmdd } = MarcacionService.getActualDate();
    console.log(yyyymmdd);

    const conditions = {
        fields: ['id_usuario', 'fecha'],
        values: [userId, yyyymmdd]
    };

    const {result, status, message} = await Marcacion.get([], conditions);

    if(status){
        res.status(200).json({
            status: true,
            marcaciones: result,
        });
    }else{
        res.status(500).json({
            status: false,
            error: message
        });
    }
}

exports.marcar = async (req, res) => {
    const { id_usuario, id_tipo_marcacion } = req.body;
    console.log({ id_usuario, id_tipo_marcacion })
    const { ddmmyyyy, fullDate, yyyymmdd } = MarcacionService.getActualDate();
    const query = `SELECT * FROM Marcacion WHERE id_usuario = ${id_usuario} AND fecha = '${yyyymmdd}' ORDER BY marcacion_entrada DESC`;
    const {result, status, message} = await raw(query);
    if(status){
        if(result.length > 0){
            const { id_marcacion, marcacion_entrada, marcacion_salida } = result[0];
            if(marcacion_salida){
                const mResult = await MarcacionResource.create([id_usuario, fullDate, yyyymmdd, id_tipo_marcacion]);
                if(mResult.status){
                    res.status(200).json({
                        status: true,
                        message: 'Marcación realizada con éxito'
                    });
                }else{
                    res.status(500).json({
                        status: false,
                        message: 'Error al realizar la marcación'
                    });
                }
            }else{
                const mEntrada = MarcacionService.getDate(marcacion_entrada);
                const mResult = await Marcacion.update(id_marcacion, [id_usuario, mEntrada.fullDate, fullDate, yyyymmdd, id_tipo_marcacion]);
                if(mResult.status){
                    res.status(200).json({
                        status: true,
                        message: 'Marcación realizada con éxito'
                    });
                }else{
                    res.status(500).json({
                        status: false,
                        message: message
                    });
                }
            }
        }else{
            const mResult = await MarcacionResource.create([id_usuario, fullDate, yyyymmdd, id_tipo_marcacion]);
            console.log(mResult);
            if(mResult.status){
                res.status(200).json({
                    status: true,
                    message: 'Marcación realizada con éxito'
                });
            }else{
                res.status(500).json({
                    status: false,
                    message: 'Error al realizar la marcación'
                });
            }
        }
    }else{
        res.status(500).json({
            status: false,
            message: 'Error al realizar la marcación'
        });
    }
}

exports.getAllMarcaciones = async(req, res) => {
    const userId = req.params.id;

    const conditions = {
        fields: ['id_usuario'],
        values: [userId]
    };

    const {result, status, message} = await Marcacion.get([], conditions);

    if(status){
        res.status(200).json({
            status: true,
            marcaciones: result,
        });
    }else{
        res.status(500).json({
            status: false,
            error: message
        });
    }
}

exports.getGroupMarcaciones = async(req, res) => {
    const userId = req.params.id;

    const query = `SELECT * FROM Marcacion WHERE id_usuario = ${userId} ORDER BY marcacion_entrada DESC;`;

    const {result, status, message} = await raw(query);
    
    if(status){
        const markingGruop = MarcacionService.getMarkingGroups(result);

        res.status(200).json({
            status: true,
            marcaciones: markingGruop,
        });
    }else{
        res.status(500).json({
            status: false,
            error: message
        });
    }
}

exports.getGroupMarcacionesByDate = async(req, res) => {
    const userId = req.params.id;
    const fromDate = req.params.from;
    const toDate = req.params.to;

    const query = `SELECT * FROM Marcacion WHERE id_usuario = ${userId} AND fecha >= '${fromDate}' AND fecha <= '${toDate}' ORDER BY marcacion_entrada DESC;`;

    console.log(query);

    const {result, status, message} = await raw(query);

    if(status){
        
        const markingGruop = MarcacionService.getMarkingGroups(result);

        res.status(200).json({
            status: true,
            marcaciones: markingGruop,
        });
    }else{
        res.status(500).json({
            status: false,
            error: message
        });
    }
}