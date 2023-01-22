const express = require('express')
const Participant = require('../models/participant')

const participantsRouter = express.Router()

participantsRouter.get('/', async (req, res) => {
  const participants = await Participant.find({})
  res.json(participants)
})

participantsRouter.post('/', async (req, res) => {
  const participant = new Participant({
    ...req.body,
    arrivedAt: new Date(),
  })
  await participant.save()
  res.json(participant)
})

module.exports = participantsRouter
