const fs = require("fs");

let posicao2 = process.argv[2];
let nome = JSON.stringify(process.argv[3]);
let email = JSON.stringify(process.argv[4]);
let informacoes = `${nome} : ${email}`;
let cadastro = informacoes;
let todosdados = fs.readFile(JSON.parse('pessoas.json'));

if(posicao2 === "salvar"){
    fs.appendFile('pessoas.json', `${cadastro}\n`, erro =>{
         if(erro){
             console.log("Erro ao salvar cadastro. O erro foi:");
             console.log(erro);
        }
        else{
             console.log("Cadastro salvo com sucesso.")
        }
}   )
} 
else if(posicao2 === "buscar-todos"){
	fs.readFile('pessoas.json', function(erro, sucesso){
     if(erro){
             console.log("Ocorreu um erro ao buscar todos os cadastros. O erro foi:");
             console.log(erro);
     }
     else{
             console.log((sucesso).toString());
             console.log("Todos os cadastros estão na tela.");
     }
    })
} 
// else if(posicao2 === "buscar"){
	
// 	// let dadosdesejados = "";

// 	fs.readFile(todosdados, `${nome}`, erro=>{

// 		if(erro){
// 		     console.log("Erro ao acessar cadastro do nome solicitado. O erro foi:");
// 		     console.log(erro);
// 	    }
// 	    else{
// 	    	for(nome.toString() in pessoas.json){
//                console.log(pessoas.json[nome]);
// 	        }
// 	    	// for(nome in todosdados){
// 		    //    console.log(dadosdesejados);
// 	     //    }
// 	    }
// 	}
// 	    // 	 console.log(`${informacoes}`);
// 	    // }
// 	)
// }
else{
	console.log("Comando correto para cadastro:");
	console.log("node cadastro.js salvar <nome> <email>");
	console.log("Para buscar todos os cadastros o comando correto é:");
	console.log("node cadastro.js buscar-todos");
	console.log("Para buscar um cadastro especifico o comando correto é:");
	console.log("node cadastro.js buscar <nome>");
}



//Tentativa 1 parte 3:
// else if(posicao2 === "buscar"){
// 	fs.readFile('pessoas.json', `${nome}`, erro=>{
		
// 		if(erro){
// 		     console.log("Erro ao acessar cadastro do nome solicitado. O erro foi:");
// 		     console.log(erro);
// 	    }
// 	    else{
// 	    	 console.log(`${informacoes}`);
// 	    }
// 	})
// }

//Outra tentativa: 
// else if(posicao2 === "buscar"){
	
// 	// let dadosdesejados = "";

// 	fs.readFile(JSON.parse('pessoas.json'), `${nome}`, erro=>{

// 		if(erro){
// 		     console.log("Erro ao acessar cadastro do nome solicitado. O erro foi:");
// 		     console.log(erro);
// 	    }
// 	    else{
// 	    	for(nome.toString() in pessoas.json){
//                console.log(pessoas.json[nome]);
// 	        }
// 	    	// for(nome in todosdados){
// 		    //    console.log(dadosdesejados);
// 	     //    }
// 	    }
// 	}
// 	    // 	 console.log(`${informacoes}`);
// 	    // }
// 	)
// }