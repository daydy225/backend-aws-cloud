const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({
  firstname: {
    type: String,
    maxLength: 15,
    trim: true,
  },
  lastname: {
    type: String,
    maxLength: 15,
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: value => {
        const re =
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        return value.match(re)
      },
      message: 'please enter a valid email address',
    },
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  arrivedAt: {
    type: Date,
  },
})

participantSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Participant', participantSchema)
