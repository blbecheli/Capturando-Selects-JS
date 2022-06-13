let meuBotao = document.querySelector('.btnpesquisa');
let nome = document.querySelector('.nome');
let idade = document.querySelector('.idade');
let linguagem = document.querySelector('.linguagem');
let btnSim = document.querySelector('.btnsim')
let btnNao = document.querySelector('.btnNao');
let resposta = document.querySelector('.resposta')

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    let minhaIdade = prompt('Quantos anos você tem?');
    let minhaLinguagem = prompt ('Qual linguagem de programação você está estudando?')
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome, );
      localStorage.setItem('idade', idade );
      localStorage.setItem('linguagem', linguagem)
      nome.innerHTML = `O seu nome é ${meuNome}`;
      idade.innerHTML = `Você está com ${minhaIdade} anos`;
      linguagem.innerHTML = `${minhaLinguagem} é a linguagem que você está estudando agora`      
    }
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }

 btnSim.onclick  = function () {
    resposta.innerHTML = "Muito bom! Continue estudando e você terá muito sucesso."
 };

 btnNao.onclick = function(){
     resposta.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?"
 }
  