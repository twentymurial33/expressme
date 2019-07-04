// Require the HTTP module 
var http=require("http");

//Define a port to listen for incoming requests 
var PORT =8080;

//create a generic function to handle requests and responses

function handleRequest(request,response){

    //capture the url the request is made to

    var path =req.url;

    //depending on the URL,display a different HTML file 

    response.end("It Works!!" +request.url);

}

//use the Node Http package to create our server
//Pass the hanldeRequest function to empower it with functionality

var server=http.createServer(handleRequest);

server.listen(PORT,function(){

    console.log("server listening on PORT")
});