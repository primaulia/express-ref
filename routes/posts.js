var express = require('express')
var router = express.Router()

router.get('/posts', function (req, res) {
  res.send('this is the posts homepage')
})

router.get('/posts/new', function (req, res) {
  res.send('NEW NEW NEW HERE YOWYOYOWYOWW')
})

router.get('/posts/:id', function (req, res) {
  console.log('this is the object of req params: ' + req.params)
  res.send('this is posts ' + req.params.id + ' homepage')
})

router.get('/posts/:id/edit', function (req, res) {
  res.send('this is posts 1 edit page heylow')
})

module.exports = router
