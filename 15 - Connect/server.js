var connect = require("connect");
var http = require("http");

//Inicialization of connect
var app = connect();

/* The 'use' method works like a relation of calls in GET method */
app.use('/profile', profile); // like a nicknames
app.use('/about', about);

// This executed when 
function profile(request, response) {
	console.log('Profile was called in URL');
}

function about(request, response) {
	console.log('About page was called in URL ');
}

http.createServer(app).listen(8888);
console.log("Server is running...")