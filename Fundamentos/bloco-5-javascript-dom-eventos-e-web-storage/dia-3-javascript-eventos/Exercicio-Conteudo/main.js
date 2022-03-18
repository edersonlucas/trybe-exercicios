const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//transform: translateY(-20px);

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
li = document.getElementsByTagName('li');
for (let index = 0; index < li.length; index += 1) {
  li[index].addEventListener('click', function (event) {
    event.target.classList.add('tech');
  });
}
// function clicouNoElemento() {
//   for (let index = 0; index < li.length; index += 1) {
//     li[index].classList.add('tech');
//   }
// }

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let caixa = document.getElementById('input');
caixa.addEventListener('keypress', function () {
  let alteraTexto = document.querySelector('.tech');
  alteraTexto.innerText = 'Hackeado';
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
let meuTop3 = document.getElementById('my-spotrybefy');
let contador = 0;
meuTop3.addEventListener('click', function () {
  contador += 1;
  if (contador >= 3) {
    window.location.href = 'https://www.google.com.br/';
  }
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
meuTop3.addEventListener('mouseover', function () {
  meuTop3.style.color = '#2fc18c';
});

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
