const createModel = require("../data_base/createModel");

const Tarjeta_RFID = createModel('Tarjeta_RFID', [
    'id_tarjeta',
    'UID_tarjeta',
    'estado'
]);

module.exports = Tarjeta_RFID;