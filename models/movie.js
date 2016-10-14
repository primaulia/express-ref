var mongoose = require('mongoose')

// create a r for movie model
var movieSchema = new mongoose.Schema({
  // prop: Datatype
  name: String,
  year: Number,
  rating: Number
})

var Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
