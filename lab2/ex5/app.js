//Exercise 5 and 6
const http = require('http');
const url = require('url');



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');  
  if(req.url == "/spin"){
      res.end("Spinning \n Slot Machine..")
  }
  else if(req.url == "/play"){
      res.end("Playing \n Slot Machine")
  
  }
  else{
    res.end("not found!")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});