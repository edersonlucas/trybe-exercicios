const botao = document.querySelector('#btn-click');
const contador = document.querySelector('#count');
let clickCount = 0;
botao.addEventListener('click', () => {
  contador.innerText = clickCount += 1;
})