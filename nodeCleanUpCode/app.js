const http = require('http');
const route = require('./routes');
const server = http.createServer(route);
console.log(route.extraText);
console.log(route);
server.listen(3000);