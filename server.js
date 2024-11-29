const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is a GET request');
    } else if (req.method === 'POST') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is a POST request');
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method not allowed');
    }
  });  

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
