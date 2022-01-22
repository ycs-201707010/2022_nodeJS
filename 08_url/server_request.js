var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    // 1. 실제 요청한 주소 전체를 콘솔에 출력
    console.log(request.url);
    var parsedUrl = url.parse(request.url);
    // 2. parsing 된 url 중에 서버 URI에 해당하는 pathname만 따로 저장
    var resource = parsedUrl.pathname;
    console.log('resource path = %s', resource);

    // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달함.
    if (resource == '/address')
    {
        var message1 = '인천광역시 서구 연희동 서인천세무서 앞 한국아파트';
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    }
    else if (resource == '/phone')
    {
        var message1 = '010-1818-1818';
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    }
    else if (resource == '/name')
    {
        var message1 = 'Kim Pen Son';
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    }
    else
    {
        var message1 = '404 Page Not Found';
        response.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
    }

    response.end(message1);
});

server.listen(80, function(){
    console.log('Server is Running...');
})