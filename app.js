// import express
var express = require('express')
var bodyParser = require('body-parser')

// instantiating the express server
var app = express()
var port = 4000

// set all the routes
var static_routes = require('./routes/pages')
var movie_routes = require('./routes/movies')
// var user_routes = require('./routes/users')
// var posts_routes = require('./routes/posts')

// capture all the request, assume all static files is inside public folder
app.use(express.static(__dirname + '/public'))

// capture all request, let it filtered by body-parse package
app.use(bodyParser.urlencoded({
  extended: true
}))

// the view engine for express is ejs. HENCE, res.render(index) => index.ejs inside VIEWS FOLDER
app.set('view engine', 'ejs')

// add middleware to handle all static routes
app.use('/', static_routes)
// add middleware to handle all movie routes
app.use('/movies', movie_routes)

// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
