const http = require('http');
const area = require('./practice');

const server = http.createServer((req, res) => {    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the Home Page</h1>');
        res.write(`
              <button onclick="location.href='/calculate'">Go to Calculate Page</button>  
            `)
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Us</h1><p>This is the about page.</p>');
        res.end();
    } 
     else if (req.url === '/calculate') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Calculate Page</h1><p>This is the calculate page.</p>');
        return area(10, 5);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        
        res.end();
    }       
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
