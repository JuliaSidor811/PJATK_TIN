
var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'test/plain'});
    response.write("url: " + request.url +"\n")
    response.end("Hello world \n a")
}).listen(8080);

console.log('Server is working at localhost:8080');

