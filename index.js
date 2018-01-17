var express = require('express')


let app = express()
    , server;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('ssh test')
});

http = require('http');
server = http.createServer(app);


server.listen(8009, '127.0.0.1');