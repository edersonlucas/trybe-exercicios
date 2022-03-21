// Botões do fundo
let fundoVermelho = document.querySelectorAll('.vermelho')[0];
let fundoAzul = document.querySelectorAll('.azul')[0];
let fundoBranco = document.querySelectorAll('.branco')[0];
let fundoPreto = document.querySelectorAll('.preto')[0];
let fundoVerde = document.querySelectorAll('.verde')[0];

// Botões das letras
let letraVermelho = document.querySelectorAll('.vermelho')[1];
let letraAzul = document.querySelectorAll('.azul')[1];
let letraBranco = document.querySelectorAll('.branco')[1];
let letraPreto = document.querySelectorAll('.preto')[1];
let letraVerde = document.querySelectorAll('.verde')[1];

// Funções
function botaoMudaCorFundo(botao, cor) {
  botao.addEventListener('click', function (event) {
    event.target.style.backgroundColor = cor;
    document.body.style.backgroundColor = event.target.style.backgroundColor;
    localStorage.setItem(
      'corFundo',
      JSON.stringify({ corFundo: event.target.style.backgroundColor })
    );
  });
}

function letrasMudaCor(botao, cor) {
  botao.addEventListener('click', function (event) {
    event.target.color = cor;
    document.getElementById('materia').style.color = event.target.color;
    localStorage.setItem(
      'corFonte',
      JSON.stringify({ corFonte: event.target.color })
    );
  });
}

// Botao Reset
let botaoReset = document.querySelector('#botaoReset');
botaoReset.addEventListener('click', function () {
  document.getElementById('materia').style.color = 'white';
  localStorage.removeItem('corFonte');
  document.body.style.backgroundColor = '#34695d9c';
  localStorage.removeItem('corFundo');
  document.querySelector('#materia').style.fontSize = '16px';
  range.value = 16;
  document.querySelector('#valorTamanhoDaFonte').innerHTML = 16;
  localStorage.removeItem('tamanhoFonte');
  document.querySelector('#materia').style.lineHeight = '30px';
  rangeEspaco.value = 30;
  document.querySelector('#valorTamanhoDoEspacamento').innerHTML = 30;
  localStorage.removeItem('espacoFonte');
  document.querySelector('#materia').style.fontFamily = 'sans-serif';
  selecao.value = 'sans-serif';
  localStorage.removeItem('fonte');
});

// Chamando funções para botões
botaoMudaCorFundo(fundoVermelho, 'red');
botaoMudaCorFundo(fundoAzul, 'blue');
botaoMudaCorFundo(fundoBranco, 'white');
botaoMudaCorFundo(fundoPreto, 'black');
botaoMudaCorFundo(fundoVerde, '#036b52');

// Chamando funções para letras
letrasMudaCor(letraVermelho, 'red');
letrasMudaCor(letraAzul, 'blue');
letrasMudaCor(letraBranco, 'white');
letrasMudaCor(letraPreto, 'black');
letrasMudaCor(letraVerde, '#036b52');

// Tamanho da Fonte
let range = document.querySelector('#tamanhoDaFonte');
range.addEventListener('change', function () {
  document.querySelector('#materia').style.fontSize = `${range.value}px`;
  document.querySelector('#valorTamanhoDaFonte').innerHTML = range.value;
  localStorage.setItem(
    'tamanhoFonte',
    JSON.stringify({ tamanhoFonte: `${range.value}px` })
  );
});

// Espaco das Fonte
let rangeEspaco = document.querySelector('#tamanhoDoEspacamento');
rangeEspaco.addEventListener('change', function () {
  document.querySelector(
    '#materia'
  ).style.lineHeight = `${rangeEspaco.value}px`;
  document.querySelector('#valorTamanhoDoEspacamento').innerHTML =
    rangeEspaco.value;
  localStorage.setItem(
    'espacoFonte',
    JSON.stringify({ espacoFonte: `${rangeEspaco.value}px` })
  );
});

// Selecao da Fonte
let selecao = document.querySelector('#selecaoDaFonte');
selecao.addEventListener('click', function (event) {
  document.querySelector('#materia').style.fontFamily = event.target.value;
  localStorage.setItem('fonte', JSON.stringify({ fonte: event.target.value }));
});

window.onload = function () {
  // IF Fonte
  if (localStorage.getItem('fonte') !== null) {
    document.querySelector('#materia').style.fontFamily = JSON.parse(
      localStorage.getItem('fonte')
    ).fonte;
    selecao.value = JSON.parse(localStorage.getItem('fonte')).fonte;
  }
  // IF tamanho da fonte
  if (localStorage.getItem('tamanhoFonte') !== null) {
    let tamanhoDaFonte = JSON.parse(
      localStorage.getItem('tamanhoFonte')
    ).tamanhoFonte;
    range.value = parseInt(tamanhoDaFonte.replace(/\D+/g, ''));
    document.querySelector('#valorTamanhoDaFonte').innerHTML = parseInt(
      tamanhoDaFonte.replace(/\D+/g, '')
    );
    document.querySelector('#materia').style.fontSize = tamanhoDaFonte;
  }
  // IF Epacaento das linhas
  if (localStorage.getItem('espacoFonte') !== null) {
    let espacoFonte = JSON.parse(
      localStorage.getItem('espacoFonte')
    ).espacoFonte;
    rangeEspaco.value = parseInt(espacoFonte.replace(/\D+/g, ''));
    document.querySelector('#materia').style.lineHeight = espacoFonte;
    document.querySelector('#valorTamanhoDoEspacamento').innerHTML = parseInt(
      espacoFonte.replace(/\D+/g, '')
    );
  }
  // IF cor do background
  if (localStorage.getItem('corFundo') !== null) {
    document.body.style.backgroundColor = JSON.parse(
      localStorage.getItem('corFundo')
    ).corFundo;
  }
  // IF cor da Fonte
  if (localStorage.getItem('corFonte') !== null) {
    document.querySelector('#materia').style.color = JSON.parse(
      localStorage.getItem('corFonte')
    ).corFonte;
  }
};
