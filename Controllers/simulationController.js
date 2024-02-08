// HANDLES LOGIC FOR PROCESSING REQUEST AND RETURNING RESPONSES. 

const SimulationEvent = require('../Models/SimulationEvent')

exports.startSimulation = async (req, res) => {
    // LOGIC TO  START SIMULATION 
    res.send('Simulation started');
}

exports.pauseSimulation = async (req, res) => {
    // LOGIC TO PAUSE SIMULATION 
    res.send('Simulation paused')
}
exports.resetSimulation = async (req, res) => {
    // LOGIC TO PAUSE SIMULATION 
    res.send('Simulation reset')
}