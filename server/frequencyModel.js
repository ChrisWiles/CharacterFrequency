const db = require("./db")
const FrequencyModel = require("./Frequency_Schema")
const mongoose = require('mongoose')

exports.frequency = (characters) => {
  // update DB
  // return updated DB
  console.log(characters)

  return FrequencyModel.find({})
    .then(data => {
      return merge(data, characters)
    })
}

function merge(data, characters) {
  const Frequency = new FrequencyModel()
  Frequency.characters = characters

  Frequency.save(function(err, fluffy) {
     if (err) return console.log(err)
  })

  return Frequency
}
