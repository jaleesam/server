var http = require("http");

var PORT1 = 7000;
var PORTTWO = 7500;


function handleRequest1(request, response) {
    response.end("It Works!! Path Hit Baby!: " + request.url);
}

function handleRequestTwo(request, response){
    response.end("Path Hit! Woah Momma!! "+ request.url);
}

var server1 = http.createServer(handleRequest1);

var serverTwo = http.createServer(handleRequestTwo);

server1.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:"+ PORT1);
});

serverTwo.listen(PORTTWO, function(){
    console.log("Server listening on: http://localhost:" + PORTTWO);
});