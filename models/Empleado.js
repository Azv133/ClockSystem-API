const createModel = require("../data_base/createModel");

const Empleado = createModel('Empleado', [
    'id_empleado',
    'nombres',
    'genero',
    'dni',
    'n_celular',
    'estado'
]);

module.exports = Empleado;