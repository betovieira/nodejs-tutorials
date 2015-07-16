/* Creating a server */

/* Get the core module HTTP */
var http = require('http');
var fs = require('fs');

// Function called when response is a error or find page is not exist
function send404Response(response){	
	response.writeHead(404, { "Content-Type": "text/plain"});
	response.write("Error 404: Page not found");
	response.end();

}


/* When finish the request */
function onRequest(request, response){
	// if request access in URL
	if(request.method == 'GET' && request.url == '/'){
		response.writeHead(200, { "Content-Type": "text/html"}); // WRITE IN HEAD
		fs.createReadStream("./index.html").pipe(response); // Get the file called of index.html
	}else{
		send404Response(response);
	}

}

/* Creating the server, and defining method executed 
	when finished of create the server */
http.createServer(onRequest).listen(8888);

/* Print indicating that the server is running */
console.log("Server is running ...");