var mongoose = require('mongoose')

/*
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */
var options = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  }
}


var uri = process.env.MONGOLAB_URI


mongoose.connect(uri, options)
var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {})
