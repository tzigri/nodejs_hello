const http = require('http');
const port = process.env.port || 4000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello');
}).listen(port);

console.log("Running at port " + port)
