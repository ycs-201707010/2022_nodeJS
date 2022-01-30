// 서버에 전송된 id 값을 if 문으로 구분하여 id 값에 따라 다른 홈페이지를 출력하는 코드.

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
    var _url = request.url;
    var querystring = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = querystring.id; // 서버에 전송된 값.

    console.log(pathname);
    console.log(title);

    if (pathname == "/")
    {
        if (title == undefined)
        {
            fs.readFile(`data/index`, 'utf-8', function(err, description){
                var title = "Welcome"
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

                response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
                response.end(template);
            });
        }
        else
        {
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

                response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
                response.end(template);
            });
        }
    }
    else
    {
        response.writeHead(404);
        response.end('Page Not Found...');
    }
});

server.listen(8080, function(){
    console.log("Main_10 Server is Running...");
});