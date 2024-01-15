const createModel = require("../data_base/createModel");

const Contrato = createModel('Contrato', [
    'id_contrato',
    'id_usuario',
    'fecha_inicio',
    'fecha_fin',
    'hora_entrada',
    'hora_salida',
    'puesto',
    'salario',
    'estado'
]);

module.exports = Contrato;
