// simple node.js http server

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    fs.readFile('./views/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
    });
// handle get request /api
server.on('request', function(req, res) {
    if (req.url === '/') {
        fs.readFile('./views/index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
});

server.listen(3000, function() {
    console.log('Server listening at port 3000');

})
