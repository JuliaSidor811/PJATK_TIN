var express = require("express");
var app = express();

app.use(express.urlencoded());

app.get('/', function (request, response){
    response.send("Main Page");
});

app.get('/hello', function (request, response){
    response.send("Hello world");
});

app.get('/form', function (request, response){
    response.sendFile('/Users/juliasidor/WebstormProjects/untitled/Laboratorium6/form.html')
});

app.post('/formdata', function (request, response){
    const body = request.body;
    console.log(body)
    response.send(JSON.stringify(body))
});

app.listen(3000);