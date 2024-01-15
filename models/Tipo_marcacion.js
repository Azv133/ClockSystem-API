const createModel = require("../data_base/createModel");

const TipoMarcacion = createModel('TipoMarcacion', [
    'id_tipo_marcacion',
    'descripcion',
    'slug',
    'estado'
]);

module.exports = TipoMarcacion;
