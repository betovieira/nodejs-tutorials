/*Importa o protocolo HTTP*/
var http = require('http');
var arquivo = require('fs');

/*Cria o servidor e escreve na página inicial*/
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-type":"text/html"});
	response.write("<h1>Hello World!</h1>");
	response.write("<br>");
	response.write("<h3>Aula de NodeJS FileSystem</h3>");

	/*fs.createWriteStream(path,[options]);*/
	var txt = arquivo.createWriteStream('./arquivo/logs.txt', {flags:'a'});
	txt.write(request.url+ '\n');/*ele salva a url acessada cada vez que foi colocada*/
	response.end();
});

/*Executa o servidor na porta 3000*/
server.listen(3000, function(){
	console.log('Servidor está rodando');
});
