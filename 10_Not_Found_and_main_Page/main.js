// Not Found 오류를 구현하는 코드.

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request,response){
    var _url = request.url;
    var querystring = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = querystring.id;

    // console.log(url.parse(_url, true));
    console.log("pathname : " + pathname);
    console.log("title : " + title)

    if (pathname == "/")
    {
        fs.readFile(`data/${querystring.id}`, 'utf-8', function(err, description){
            var template = `
            <!doctype html>
            <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>
            </html>
            `;

            response.writeHead(200);
            response.end(template);
        }); 
    }
    else
    {
        response.writeHead(404);
        response.end('Page Not Found...');
    }
});

server.listen(8080, function(){
    console.log("Server is Running...");
});