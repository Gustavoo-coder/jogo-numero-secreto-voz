//let titulo =document.querySelector("h1"); * seleciona o elemento*              *Manipulação de elementos*
//titulo.innerHTML ="Jogo do número secreto"; * defino o valor para o elemento*         

//let paragrafro = document.querySelector("p");
//paragrafro.innerHTML ="Escolha um numero entre 1 e 10";

let listaNumerosSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){    // usando funções com parâmetros
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
}

function exibirMensagemInicial(){
  
  exibirTextoNaTela("h1", "Jogo do numero secreto");
  exibirTextoNaTela("p","Escolha um numero entre 1 e 10");

}

  exibirMensagemInicial();

function verificarChute() {  // Função sem parâmetros
  
  let chute = document.querySelector("input").value; // retorna um valor a partir de um dado digiatado pelo usuario
  
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1","acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // operador ternario
        let mensagemTentativa = (`Você descobriu numero secreto com ${tentativas} ${palavraTentativa} !`);
        exibirTextoNaTela("p",mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled"); // o que é  document.getElementById?
    } else{
      if( chute > numeroSecreto){
        exibirTextoNaTela("p","O numero secreto é menor");
      } else{
        exibirTextoNaTela("p","O numero secreto é maior");
      }
      tentativas++;
      
      limparCampo();

    } 
  
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaNumerosSorteado.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
      listaNumerosSorteado = [];
    }

    if(listaNumerosSorteado.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
    } else{
      listaNumerosSorteado.push(numeroEscolhido);
      console.log(listaNumerosSorteado)
      return numeroEscolhido;
    }
  }

function limparCampo(){
        chute = document.querySelector("input");
        chute.value = "";
      }



function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
  }