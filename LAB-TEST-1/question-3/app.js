const http = require('http');
var indexF = require('./osinfo/index');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
        if (req.url == '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('No data found\n');
        }
        else if (req.url == '/api/systeminfo') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(indexF.getSysteminfo()));
        }
        else if (req.url == '/api/userinfo') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(indexF.getUserinfo()));
        }
        else if (req.url == '/api/firewall') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(indexF.getStatuses()));
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end('404\n');
        }
    }
    )
;

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
})
;
