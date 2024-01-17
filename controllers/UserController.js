const Usuario = require("../models/Usuario");

exports.getUsers = async(req, res) => {
    const {result, status, message} = await Usuario.getAll();
    if(status){
        res.status(200).json({
            usuarios: result
        });
    }else{
        res.status(500).json({
            error: message
        });
    }
}

exports.addUser = async (req, res) => {
    const {id_rol, id_empleado, id_rfid, correo, contraseña, estado} = req.body;
    const {result, status, message} = await Usuario.create(id_rol, id_empleado, id_rfid, correo, contraseña, estado);
    if(status){
        res.status(200).json({
            message: 'Usuario añadido con éxito'
        });
    }else{
        res.status(500).json({
            error: message
        });
    }
};

exports.updateUser = async (req, res) => {
    const {id_rol, id_empleado, id_rfid, correo, contraseña, estado} = req.body;
    const {result, status, message} = await Usuario.update(req.params.id, id_rol, id_empleado, id_rfid, correo, contraseña, estado);
    if(status){
        res.status(200).json({
            message: 'Usuario actualizado con éxito'
        });
    }else{
        res.status(500).json({
            error: message
        });
    }
};

exports.deleteUser = async (req, res) => {
    const {result, status, message} = await Usuario.delete(req.params.id);
    if(status){
        res.status(200).json({
            message: 'Usuario eliminado con éxito'
        });
    }else{
        res.status(500).json({
            error: message
        });
    }
};

exports.login = async (req, res) => {
    const {correo, contraseña} = req.body;
    const conditions = {
        fields: ['correo', 'contraseña'],
        values: [correo, contraseña]
    }
    
    const {result, status, message} = await Usuario.get([], conditions);

    if(status){
        if(result != null && result.length > 0){
            res.status(200).json({
                user: result[0],
                status: true,
                message: `Bienvenido al sistema de asistencia`,
            });
        }else{
            res.status(200).json({
                status: false,
                message: 'Credenciales erróneas'
            });
        }
    }else{
        res.status(500).json({
            error: message
        });
    }
};