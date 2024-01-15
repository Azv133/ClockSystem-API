const createModel = require("../data_base/createModel");

const Rol = createModel('Rol', [
    'id_rol',
    'descripcion',
    'estado'
]);

module.exports = Rol;