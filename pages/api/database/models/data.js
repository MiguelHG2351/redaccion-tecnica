const { Schema, model } = require('mongoose')

const Data = new Schema({
  name: { type: String, required: true }
})

module.exports = model('data', Data)
