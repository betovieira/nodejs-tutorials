/* Creating a server */

/* Get the core module HTTP */
var http = require('http');

/* When finish the request */
function onRequest(request, response){

	/* Information of page that user accessed */
	console.log("A user made a request " + request.url); // Page of user accessed
	response.writeHead(200, {"Context-Type" : "text/plain"} ); // Response content type
	response.write("Here is some data"); // Response writed
	response.end(); // End of response

}

/* Creating the server, and defining method executed 
	when finished of create the server */
http.createServer(onRequest).listen(8888);

/* Print indicating that the server is running */
console.log("Server is running ...");