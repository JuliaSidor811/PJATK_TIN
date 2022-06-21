var http = require("http")
var url = require("url")

http.createServer(function (request,response){
    response.writeHead(200, {'Content-type': 'test/plain'});
    var i = url.parse(request.url, true).query;
    var theDate = i.year + " " + i.month;
    response.write(theDate);
    response.end();

}).listen(8080);
console.log("Server is working at localhost:8080")