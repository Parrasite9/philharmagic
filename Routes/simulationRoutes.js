// HANDLES SIMULATION RELATED REQUEST 

const express = require('express')
const router = express.Router()
const simulationController = require('../Controllers/simulationController.js')

router.post('/start', simulationController.startSimulation)
router.post('/pause', simulationController.pauseSimulation)
router.post('/stop', simulationController.stopSimulation)

module.exports = router;