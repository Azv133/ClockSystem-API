const createModel = require("../data_base/createModel");

const Usuario = createModel('Usuario', [
    'id_usuario',
    'id_rol',
    'id_empleado',
    'id_rfid',
    'correo',
    'contrasena',
    'estado',
    'secret',
]);

module.exports = Usuario;