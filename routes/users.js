var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response))
router.get('/', function (req, res) {
  res.send('this is users homepage')
})

router.get('/about', function (req, res) {
  res.send('this is the users about page')
})

router.get('/contact', function (req, res) {
  res.send('this is the users contact page')
})

router.get('/hello', function (req, res) {
  res.send('this is the hello page')
})

module.exports = router
