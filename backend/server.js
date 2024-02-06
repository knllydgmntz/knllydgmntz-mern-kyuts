const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000


// Server config
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// End of Server config

// Routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Middleware
app.use(errorHandler)

// Port and Database config
connectDB()
app.listen(port, () => console.log(`Server started on port ${port}`))
