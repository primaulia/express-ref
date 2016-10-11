var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response))
router.get('/', function (req, res) {
  res.send('hello world, this is the homepage')
})

router.get('/about', function (req, res) {
  res.send('this is the about page')
})

router.get('/contact', function (req, res) {
  res.send('this is the contact page')
})

router.get('/hello', function (req, res) {
  res.send('this is the hello page')
})

module.exports = router
