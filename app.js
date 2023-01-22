const express = require('express')
const mongoose = require('mongoose')
const { info, error } = require('./utils/logger')
const config = require('./utils/config')
const cors = require('cors')
const app = express()
const participantsRouter = require('./controllers/participants')
const { unknownEndpoint } = require('./utils/middlewere')

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    info('connected to MongoDB')
  })
  .catch(err => {
    error('error connecting to MongoDB:', err.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.use('/api/participants', participantsRouter)

app.use(unknownEndpoint)

module.exports = app
