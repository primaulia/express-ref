var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// All the GET requests
router.get('/', function (req, res) {
  // all users view under INDEX.EJS
  res.render('users/index')
}).get('/new', function (req, res) {
  // NEW route under NEW.EJS
  res.render('users/new')
}).get('/:id', function (req, res) {
  res.send('user\'s ' + req.params.id + ' details')
}).get('/:id/edit', function (req, res) {
  res.render('users/edit')
  // res.send('edit user\'s ' + req.params.id + ' details')
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
  res.send(req.body)
  // res.send('posted username is ' + posted_username + ' and posted password is: ' + posted_password)
})

// only PUT request
router.put('/:id', function (req, res) {
  res.send('edit user' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete user' + req.params.id)
})

module.exports = router
