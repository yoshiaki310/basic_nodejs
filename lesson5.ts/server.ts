var http: any = require('http'),
    fs: any = require('fs'),
    ejs: any = require('ejs');

var server: any = http.createServer();

var httpMessage: string = 'Hello, World';
var settings = require('./settings.ts');
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');

var n: number = 0;

server.on('request', function (req, res) {
    n++;
    var data = ejs.render(template, {
        title: 'helo',
        content: '<strong>world !</strong>',
        n: n,
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();

});
server.listen(settings.port, settings.server);
console.log('server listening...');

