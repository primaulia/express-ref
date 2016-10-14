var express = require('express')
var router = express.Router()

var Movie = require('../models/movie')

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// All the GET requests
router.get('/', function (req, res) {
  // all movies view under INDEX.EJS
  res.render('movies/index')
}).get('/new', function (req, res) {
  // NEW route under NEW.EJS
  res.render('movies/new')
}).get('/:id', function (req, res) {
  res.send('movie\'s ' + req.params.id + ' details')
}).get('/:id/edit', function (req, res) {
  res.send('edit movie\'s ' + req.params.id + ' details')
})

// the only POST request
router.post('/', function (req, res) {
  // get the post parameter
  // {
  // username: "primaulia",
  // userpassword: "test123"
  // }
  // var posted_username = req.body.username
  // var posted_password = req.body.userpassword
  // res.send('posted username is ' + posted_username + ' and posted password is: ' + posted_password)

  var newMovie = new Movie({
    name: req.body.newmovie.name,
    year: req.body.newmovie.year,
    rating: 4
  })

  newMovie.save(function (err) {
    if (err) throw new Error(err)
  })

  res.send(req.body)
})

// only PUT request
router.put('/:id', function (req, res) {
  res.send('edit movie' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete movie' + req.params.id)
})

module.exports = router
