const app = require('express')()
const express = require('express')
const http = require('http').Server(app)
const path = require('path')
const bodyParser = require('body-parser');
const browserify = require('browserify-middleware')
const assetFolder = path.join(__dirname, '..', 'client','public')

// Serve Static Assets
app.use(express.static(assetFolder))
   .use(bodyParser.json())

app.post('/frequency', (req, res) => {
   console.log(req.body.string)
});

// Serve JS Assets
app.get('/app-bundle.js',
 browserify('./client/index.js', {
    transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
  })
)

// Wild card route for client side routing.
app.get('/*', (req, res) => {
  res.sendFile( assetFolder + '/index.html' )
})

// Start server
var port = process.env.PORT || 4000
http.listen(port)
console.log("Listening on localhost:" + port)
