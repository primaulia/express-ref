// import express
var express = require('express')

// instantiating the express server
var app = express()
var port = 4000

app.use(function (req, res, next) {
  console.log('new req method is: ' + req.method, 'new req url is: ' + req.url)
  next()
})

// set the require routes
var routes = require('./routes/index')
var user_routes = require('./routes/users')

// set the middleware for routes
app.use('/', routes)
app.use('/users', user_routes)

// take this out from app.js

// setting the route to homepage
// app.get('/path-name', callback(request, response))
// app.get('/', function (req, res) {
//   res.send('hello world, this is the homepage')
// })
//
// app.get('/about', function (req, res) {
//   res.send('this is the about page')
// })
//
// app.get('/contact', function (req, res) {
//   res.send('this is the contact page')
// })

// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
