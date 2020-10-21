const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var myReadStream = fs.createdReasStream(_dirname + '/index.html', 'utf8');
  myReadStream.pip(res);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});