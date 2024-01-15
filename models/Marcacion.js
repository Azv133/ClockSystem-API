const createModel = require("../data_base/createModel");

const Marcacion = createModel('Marcacion', [
    'id_marcacion',
    'id_usuario',
    'marcacion_entrada',
    'marcacion_salida',
    'fecha',
    'id_tipo_marcacion'
]);

module.exports = Marcacion;