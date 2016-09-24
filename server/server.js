var app = require('express')()
var express = require('express')
var http = require('http').Server(app)
var path = require('path')
var browserify = require('browserify-middleware')
var path = require('path')
var assetFolder = path.join(__dirname, '..', 'client','public')

// Serve Static Assets
app.use(express.static(assetFolder))

// Serve JS Assets
app.get('/app-bundle.js',
 browserify('./client/index.js', {
    transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
  })
) 

// Wild card route for client side routing.
app.get('/*', function(req, res){
  res.sendFile( assetFolder + '/index.html' )
})

// Start server
var port = process.env.PORT || 4000
http.listen(port)
console.log("Listening on localhost:" + port)