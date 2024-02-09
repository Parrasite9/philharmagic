const express = require('express')
const connectDB = require('./MongoDB/mongodb')

// Load environment variables from a .env file into process.env
require('dotenv').config()

// Call the function to connect to the MongoDB database
connectDB()


const app = express()

// Middleware to parse JSON bodies in requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hell, World!')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})