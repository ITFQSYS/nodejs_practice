const http = require('http')

var server = http.createServer(
    
    function(request,response){
        response.setHeader('Content-Type','text/html')
        response.write('<!DOCTYPE html><html lang="ja">')
        response.write('<head><meta charset="utf-8">')
        response.write('<title>Hello</title></head>')
        response.write('<body><h1>Hello</h1>')
        response.write('<p>これはnode.jsのサンプルページです</p>','utf8')
        response.write('</body></html>')
    }
);

server.listen(3000);
console.log("Server started.")