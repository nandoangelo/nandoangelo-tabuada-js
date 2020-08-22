// Recebendo a data e hora do sistema
var agora   = new Date();
var ano     = agora.getFullYear();

/* 
FUNÇÃO: atualizaAnoRodape()
============================================
Criada para atualizar o ano no copyright do 
rodapé do site. */

function atualizaAnoRodape() {

// Manipulador do DOM
var anoRodape = document.querySelector('span.ano');

// Recebe o ano atual do sistema
anoRodape.innerText = ano;
}

/* 
FUNÇÃO: gerarTabuada()
=============================================
Captura o valor informado pelo usuário e exibe
sua tabuada de 0 a 10. */

function gerarTabuada() {

  let valor = document.getElementById('txtvalor');

  // Verifica se foi digitado algum valor no campo
  if (valor.value.length == 0) {
    alert('É preciso informar um valor para continuar. Tente novamente, ok?');
  }
  else {
    // Convertendo o valor em número
    num = Number(valor.value);
    
    // Manipulador da área onde iremos inserir a tabuada
    let tabuada = document.getElementById('tabuada');

    // Inicializando a tabuada com um título
    tabuada.innerHTML = `<h4>Tabuada de ${num}:</h4>`;

    // Adicionando os items da nossa tabuada
    for (let i = 0; i <= 10; i++) {
      tabuada.innerHTML += `<p>${num} x ${i} = ${num*i}</p>`;
    }
  }

}