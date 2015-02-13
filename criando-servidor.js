
/*Importa o protocolo HTTP*/
var http = require('http');

/*Cria o servidor e escreve na página inicial*/
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-type":"text/html"});
	response.write("<h1>Hello World!</h1>");
	response.end();
});

/*Executa o servidor na porta 3000*/
server.listen(3000, function(){
	console.log('Servidor está rodando');
});
