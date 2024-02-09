// IMPORT MONGODB 
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database using the connection URI from environment variables
        // and set some options for the connection to use the new URL parser and unified topology engine
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // IF IT CONNECTS PROPERLY 
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1) //EXIT PROCESS WITH FAILURE
    }
}

module.exports = connectDB