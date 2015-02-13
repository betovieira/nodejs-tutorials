/*File System*/
var arquivo = require('fs');

/*Lê os arquivos
	ASSINATURA	

	fs.readFile(filename, [options], callback);
*/
arquivo.readFile('./arquivo/texto.txt', function(err, data){
	if(err) throw err;
	console.log(data.toString());
});

/*Write file
	ASSINATURA
	options = w | cria um novo arquivo
	options = a | adiciona  no conteudo do arquivo

	fs.writeFile(filename, data, [options], callback);
*/

/*Se os arquivo já existe então cria*/
arquivo.exists(path, function(resultado){
	if(!resultado) {
		arquivo.writeFile(path, 'Criando arquivo com nodeJS 3',[{flag:'w'}], function(err){
			if(err) throw err;
			console.log('Arquivo criado com sucesso!');
		});
	}else{
		console.log('Arquivo Existente');
	}
});
