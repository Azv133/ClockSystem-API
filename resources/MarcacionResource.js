const createModel = require("../data_base/createModel");

const MarcacionResource = createModel('Marcacion', [
    'id_marcacion',
    'id_usuario',
    'marcacion_entrada',
    'fecha',
    'id_tipo_marcacion'
]);

module.exports = MarcacionResource;