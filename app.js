
const http = require('http');
const port = process.env.PORT || 3000

let fs = require('fs');

const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});
    
  fs.readFile('./index.html', function(error, data) {
      if(error) {
         res.writeHead(404);
         res.write('File not found!')
      } else {
          res.write(data);
      }
      res.end
  })
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
