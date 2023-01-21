const express = require('express')
const mongoose = require('mongoose')
const { info, error } = require('./utils/logger')
const config = require('./utils/config')
const cors = require('cors')
const app = express()

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    info('connected to MongoDB')
  })
  .catch(err => {
    error('error connecting to MongoDB:', err.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

module.exports = app
