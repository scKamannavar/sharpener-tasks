
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    const url = req.url; 
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-type', 'text/HTML');
        res.write('<html>');
        res.write('<head><title>Node App</title></head>');
        res.write('<body><form action="/about" method="POST"><input  type = "text"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/about' && method === "POST"){
       
        fs.writeFileSync('message.txt', 'DUMMY TEXT');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
       
        res.end();

    }
});
server.listen(4000);