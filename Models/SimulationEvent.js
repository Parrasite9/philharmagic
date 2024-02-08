const mongoose = require('mongoose')

const SimulationEventSchema = new mongoose.Schema ({
    type: String,
    timestamp: Date,
    details: Object,
})

module.exports = mongoose.model('SimultaionEvent', SimulationEventSchema)