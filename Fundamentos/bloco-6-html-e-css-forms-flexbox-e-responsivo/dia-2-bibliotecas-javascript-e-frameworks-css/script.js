const botaoEnviar = document.querySelector('#enviar');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const checkConcordo = document.querySelector('#concordo');
const modalDados = document.querySelector('#dados-invalidos');
const modalEnviados = document.querySelector('#dados-enviados');
const fechar = document.querySelectorAll('.fechar');

console.log(inputNome);
botaoEnviar.addEventListener('click', event => {
  verificaDados(event);
});
checkConcordo.addEventListener('click', event => {
  if (event.checked == false) {
    event.checked = true;
  } else {
    event.checked = true;
  }
});

function modalAparece(modal) {
  modal.style.opacity = '1';
  modal.style.display = 'block';
  modal.style.zIndex = '1003';
  modal.style.top = '10%';
  modal.style.transform = 'scaleX(1) scaleY(1)';
}

function modalSome(modal) {
  modal.style.opacity = '0';
  modal.style.display = 'none';
  modal.style.zIndex = '1003';
  modal.style.top = '4%';
  modal.style.transform = 'scaleX(0.8) scaleY(0.8)';
}

function verificaDados(botao) {
  botao.preventDefault();
  if (inputNome.value.length < 10 || inputNome.value.length > 40) {
    modalAparece(modalDados);
  } else if (inputEmail.value.length < 10 || inputEmail.value.length > 50) {
    modalAparece(modalDados);
  } else if (checkConcordo.checked !== true) {
    alert(
      'Impossivel enviar formulario sem concordar em ceder direito de imagem'
    );
  } else {
    modalAparece(modalEnviados);
    limparTudo();
  }
}

fechar[0].addEventListener('click', event => {
  console.log('aqui');
  event.preventDefault();
  modalSome(modalDados);
});

fechar[1].addEventListener('click', event => {
  console.log('aqui');
  event.preventDefault();
  modalSome(modalEnviados);
});

function limparTudo() {
  document.querySelector('#nome').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('textarea').value = '';
  document.querySelector('#data').value = '';
  document.querySelector('#concordo').checked = false;
  document.querySelector('#oportunidades').checked = false;
}

// function modal(botao) {
//   botao.preventDefault();
// }
// const botaoModal = document.querySelector('#bt-modal');
// botaoModal.addEventListener('click', event => {
//   modal(event);
// });

const elemsModal = document.querySelectorAll('.modal');
const instancesModal = M.Modal.init(elemsModal);
