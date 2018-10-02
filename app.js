const http = require('http')

var server = http.createServer(
    
    function(request,response){
        response.end('<html><body><h1>Hello</h1><p>Welcome to Node.js</p></body></html>')
    }
);

server.listen(3000)