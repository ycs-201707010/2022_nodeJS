var http = require('http');
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
            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
        </p>
    </body>
    </html>
    `;

    response.end(template);
});

server.listen(8080, function(){
    console.log('main2 Server is Running....')
});