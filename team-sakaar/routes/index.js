// 1
const http = require('http');

// 2
const hostname = 'localhost';
const port = 3000;

// 3
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Welcome to the world of Node development!\n');
});

// 4
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})