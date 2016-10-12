var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// read all movies' details
router.get('/', function (req, res) {
  res.send('all movies details')
})

// read one movie details
router.get('/:id', function (req, res) {
  res.send('movie\'s ' + req.params.id + ' details')
})

// CREATE ROUTES
router.get('/new', function (req, res) {
  res.send('new movie form')
})

router.post('/', function (req, res) {
  res.send('post movie form')
})

// UPDATE ROUTES
router.get('/:id/edit', function (req, res) {
  res.send('edit movie\'s ' + req.params.id + ' details')
})

router.put('/:id', function (req, res) {
  res.send('edit movie' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete movie' + req.params.id)
})

module.exports = router
