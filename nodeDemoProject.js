const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
const url = req.url; 
const method = req.method;

    if(url === '/'){
        fs.readFile('message.txt', (err, data) => {
            console.log('from file ' + data);
            showcont(data);
        });
        res.setHeader('Content-type', 'text/HTML');

        function showcont(kehoo){
            res.write('<html>');
            res.write('<head><title>Node App</title></head>');
            res.write('<body><h3>'+kehoo+'</h3><form action="/about" method="POST"><input  type = "text" name = "message"><button type="submit">Submit</button></form></body>');
            res.write('</html>');
            return res.end();
        }

    }

    if(url === '/about' && method === "POST"){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk); 
            body.push(chunk);

        });
        req.on('end', ()=>{
            let parsedbody = Buffer.concat(body).toString();
            console.log('parsed Body'+ parsedbody);
            const message = parsedbody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

});
server.listen(3000);