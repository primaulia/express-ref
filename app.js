// all packages installed
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// required from a javascipt file in my app directory
var movie_routes = require('./routes/movies')

// start of the implementation
var app = express()
var port = 4000
// connects to our mongo database
mongoose.connect('mongodb://localhost/blog')
mongoose.Promise = global.Promise

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/movies', movie_routes)

// var newMovie = new Movie({
//   name: 'Gone with the wind 2',
//   year: 1952,
//   rating: 1
// })
//
// newMovie.save(function (err) {
//   if (err) throw new Error(err)
// })

// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
