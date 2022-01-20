var http = require('http'); // http 모듈
var fs = require('fs'); // 파일 시스템 모듈
var url = require('url');

var app = http.createServer(function(request, response){

    var _url = request.url;
    var queryString = url.parse(_url, true).query;
    console.log(queryString.id);

    if (_url == "/")
    {
        _url = '/index.html';
    }

    if (_url == '/favicon.ico')
    {
        // Http 코드 404를 보내고 응답을 종료한다.
        response.writeHead(404);
        response.end();

        return;
    }

    response.writeHead(200, {'Context-Type' : 'text/html; charset=utf-8'});
    response.end(queryString.id);
});

app.listen(8080, function(){
    console.log('Server is Running...');
});