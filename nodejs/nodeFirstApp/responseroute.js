
const http = require('http');
const server = http.createServer((req, res)=>{
    const url = req.url; 
    if(url === '/'){
        res.setHeader('Content-type', 'text/HTML');
        res.write('<html>');
        res.write('<head><title>Node App</title></head>');
        res.write('<body><h1>No data</h1></body>');
        res.write('</html>');
        res.end();
    }

    if(url === '/home'){
        res.setHeader('Content-type', 'text/HTML');
        res.write('<html>');
        res.write('<head><title>Noade App</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/about'){
        res.setHeader('Content-type', 'text/HTML');
        res.write('<html>');
        res.write('<head><title>Node App</title></head>');
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/node'){
        res.setHeader('Content-type', 'text/HTML');
        res.write('<html>');
        res.write('<head><title>Node App</title></head>');
        res.write('<body><h1>Hello from my node js server</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(4000);
