const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/shaai', { useNewUrlParser: true });

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function (err) {
    if (err) throw err;
    require('./models/user')
    require('./models/blog')
});

