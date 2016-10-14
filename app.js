var express = require('express')
var app = express()
var port = 4000

var bodyParser = require('body-parser')

var mongoose = require('mongoose')
// connects to our mongo database
mongoose.connect('mongodb://localhost/blog')
mongoose.Promise = global.Promise

var Movie = require('./models/movie')

app.use(bodyParser.urlencoded({
  extended: true
}))

var newMovie = new Movie({
  name: 'Gone with the wind 2',
  year: 1952,
  rating: 1
})

newMovie.save(function (err) {
  if (err) throw new Error(err)
})

// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
