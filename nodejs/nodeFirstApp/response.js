
const http = require('http');
const server = http.createServer((req, res)=>{
    res.setHeader('Content-type', 'text/HTML');
    res.write('<html>');
    res.write('<head><title>My First Node Page</title></head>');
    res.write('<body><h1>Hello from my node js server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);
