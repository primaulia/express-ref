// import express
var express = require('express')

// instantiating the express server
var app = express()
var port = 4000

// app.use(function (req, res, next) {
//   console.log('new req method is: ' + req.method, 'new req url is: ' + req.url)
//   next()
// })

// set all the routes
var routes = require('./routes/index')
var user_routes = require('./routes/users')
var posts_routes = require('./routes/posts')

// set the middleware for routes
app.use('/', routes)
app.use('/users', user_routes)
app.use('/posts', post_routes)

// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
