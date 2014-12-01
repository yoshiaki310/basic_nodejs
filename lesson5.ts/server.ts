import http = require('http');
var server : any = http.createServer();
var httpMessage : string = 'Hello, World';
server.on('request',function(req,res){
	res.writeHead(200, {'Content-Type':'Text/Plain'});
	res.write(httpMessage);
	res.end();
});
server.listen(1337,'localhost');
console.log('server listening...');



/*
import http = require('http');
var port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
*/
