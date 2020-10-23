var http = require('http');
var datetime = require ('./date')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Kendi Here'+ '<br>');
  res.write(`date is ${datetime()}`)
  res.end()
}).listen(8081);

