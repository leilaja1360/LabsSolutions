const http = require('http');
var books = require('./store/books');
var video = require('./store/video');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
//test for push
const server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  if(req.url === '/home' || req.url === '/'){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end('No data found\n');
  }else if(req.url === '/api/favoritebook'){
    var fBooks = books.favoriteBook();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(fBooks));
  }else if(req.url === '/api/getbooks'){
    var getBooks = books.getBookRecommendations();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(getBooks));
  }else if(req.url === '/api/getvideos'){
    var getvideo = video.getvideos();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(getvideo));
  }else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end('404\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
