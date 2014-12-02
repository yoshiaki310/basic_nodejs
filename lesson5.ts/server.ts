import http = require('http');
var fs = require('fs');

var server: any = http.createServer();


var httpMessage: string = 'Hello, World';
var settings = require('./settings.ts');
var msg: string;
server.on('request', function (req, res) {
    fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('not found ....');
            return res.end();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();

    });
    /*
    switch (req.url) {
        case '/about':
            msg = 'about this page';
            break;
        case '/profile':
            msg = 'about me';
            break;
        default:
            msg = 'wrong';
            break;
    }
    */
});
server.listen(settings.port,settings.server);
console.log('server listening...');



/*
import http = require('http');
var port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
*/
