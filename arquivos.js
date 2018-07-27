const fs = require("fs");

console.log("FS importado com sucesso.");

fs.readFile('teste.txt', function(erro, sucesso){
     if(erro){
          console.log("Ocorreu um erro. O erro foi:")
          console.log(erro);
     }
     else{
          console.log(sucesso.toString());
          console.log("O texto está na tela");
     }
});

console.log("Função de leitura executada");

let paraEscrever = process.argv[2];

fs.appendFile('escrever.txt',`${paraEscrever}\r\n`, erro => {
     if(erro){
          console.log("Erro ao escrever arquivo. O erro foi:");
          console.log(erro);
     }
     else{
          console.log("Arquivo escrito com sucesso");
     }
});

console.log("Função de escrita executada.");




// function nome(a){
//      return g;
// }

// const nome = a=>g;  ou a =>g;

// function nome(a,b,c){
//      d 
//      e 
//      f 
//      return g;
// }

// (a,b,c) => {
//      d 
//      e 
//      f 
//      return g;
// }