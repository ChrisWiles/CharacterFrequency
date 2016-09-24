let mongoose = require('mongoose')

// Create a Frequency schema
const frequencySchema = new mongoose.Schema({
  characters: Object
})

// Created a Mongoose schema which maps to a MongoDB collection and defines
// the shape of the documents within that collection.

// exported the Mongoose model
module.exports = mongoose.model("Frequency", frequencySchema)
