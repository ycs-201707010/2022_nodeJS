var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
    var _url = request.url;
    var querystring = url.parse(_url, true).query;
    var title = querystring.id;

    if (_url == '/')
    {
        title = 'Welcome!';
    }

    if (_url == '/favicon.ico')
    {
        return response.writeHead(404);
    }

    response.writeHead(200);

    fs.readFile(`data/${title}`, 'utf-8', function(err, description){
        var template = `
        <!doctype html>
        <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>
                ${description}
            </p>
        </body>
        </html>
        `;
    
        response.end(template);
    });
    
});

server.listen(8080, function(){
    console.log('main3 Server is Running....')
});