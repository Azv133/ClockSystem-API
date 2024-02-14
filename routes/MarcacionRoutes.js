const express = require('express')
const controller = require('../controllers/MarcacionController')
const router = express.Router()

const path = 'marcaciones'

router.get(`/${path}/:id`, controller.getMarcaciones)
router.get(`/${path}/all/:id`, controller.getAllMarcaciones)
router.get(`/${path}/group/:id`, controller.getGroupMarcaciones)
router.get(`/${path}/groupByDate/:id/:from/:to`, controller.getGroupMarcacionesByDate)
router.post(`/${path}`, controller.marcar)

module.exports = router