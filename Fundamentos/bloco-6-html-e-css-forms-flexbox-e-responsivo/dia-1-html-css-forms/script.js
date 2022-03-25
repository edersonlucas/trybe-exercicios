const botaoEnviar = document.querySelector('#enviar');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const checkConcordo = document.querySelector('#concordo');
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

function verificaDados(botao) {
  botao.preventDefault();
  if (inputNome.value.length < 10 || inputNome.value.length > 40) {
    alert('Dados Inválidos');
  } else if (inputEmail.value.length < 10 || inputEmail.value.length > 50) {
    alert('Dados Inválidos');
  } else if (checkConcordo.checked !== true) {
    alert(
      'Impossivel enviar formulario sem concordar em ceder direito de imagem'
    );
  } else {
    alert(
      'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip'
    );
  }
}
