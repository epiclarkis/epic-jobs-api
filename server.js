const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const jobRoutes = require('./routes/jobRoutes')
const bodyParser = require('body-parser')

const PORT = process.env.PORT
const ATLAS_URI = process.env.ATLAS_URI

// Express app
const app = express()

// Use Cors
app.use(cors())

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/jobs', jobRoutes)

// Connect to database
mongoose.connect(ATLAS_URI)
    .then(() => {
        // Listen for requests
        app.listen(PORT, () => {
            console.log(`Connected to database and listening on port: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err.message)
    })
