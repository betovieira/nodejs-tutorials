/*IMPORTS*/
var  http = require('http');
var arquivo = require('fs');

/*Lê um arquivo .html e coloca dentro de um servidort*/
var server = http.createServer(function(request, response){
	
	response.writeHead(200, {"Content-Type":"text/html"});

	/*Verifica rotas !*/
	/*Contante __dirname, pega o nome do diretório
	pode-se também usar o ponto para diretório local*/
	if(request.url == '/'){
		arquivo.readFile(__dirname+ '/arquivos/index.html', function(err, html){	
			if(err)	response.write('Arquivo index.html não encontrado.');
			response.write(html);

			response.end();
		});
	}else if(request.url == '/contatos') {
		arquivo.readFile(__dirname+ '/arquivos/contatos.html', function(err, html){
			if(err) response.write('Arquivo não encontrado.');
			response.write(html);

			response.end();
		});
	}else{
		response.write('Página não encontrada');
		response.end();
	}

	
});

server.listen(3000, function(){
	console.log('Servidor rodando!');
});