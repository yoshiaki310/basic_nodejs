/// <reference path="Scripts\typings\node\node.d.ts" />

var http: any = require('http'),
    fs: any = require('fs'),
    ejs: any = require('ejs'),
    qs: any = require('querystring');

var server: any = http.createServer();

var httpMessage: string = 'Hello, World';
var settings = require('./settings.ts');
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
var posts = [];

function renderForm(posts, res) {
    var data = ejs.render(template, {
        posts: posts,
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
}

server.on('request', function (req, res) {

    if (req.method === 'POST') {
        req.data = '';
        req.on("readable", function () {
            req.data += req.read();
        });
        req.on("end", function () {
            var query = qs.parse(req.data);
            posts.push(query.name);
            renderForm(posts, res);
        });


    } else {
        renderForm(posts, res);
    }

});
server.listen(settings.port, settings.server);
console.log('server listening...');

