function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];
let ulDays = document.getElementById('days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  let li = document.createElement('li');
  li.classList = 'day';
  if (
    dezDaysList[index] === 4 ||
    dezDaysList[index] === 11 ||
    dezDaysList[index] === 18 ||
    dezDaysList[index] === 25
  ) {
    li.classList.add('friday');
  }
  if (
    dezDaysList[index] === 24 ||
    dezDaysList[index] === 25 ||
    dezDaysList[index] === 31
  ) {
    li.classList.add('holiday');
  }
  li.innerText = dezDaysList[index];
  ulDays.append(li);
}

// Exercício 2:
let divButons = document.querySelector('.buttons-container');
function criaBotao(nomeDoBotao, id) {
  let botao = document.createElement('button');
  botao.innerText = nomeDoBotao;
  botao.id = id;
  divButons.appendChild(botao);
}
criaBotao('Feriados', 'btn-holiday');

// Exercício 3:
let botaoFeriado = document.getElementById('btn-holiday');
let contadorFeriado = 1;
botaoFeriado.addEventListener('click', function () {
  contadorFeriado += 1;
  let holiday = document.querySelectorAll('.holiday');
  for (let index = 0; index < holiday.length; index += 1) {
    if (contadorFeriado % 2 === 0) {
      holiday[index].style.backgroundColor = '#2fc18c';
    } else {
      holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

// Exercício 4:
criaBotao('Sexta-feira', 'btn-friday');

//Exercício 5:
let botaoSexta = document.getElementById('btn-friday');
let contadorSexta = 1;
botaoSexta.addEventListener('click', function () {
  contadorSexta += 1;
  let friday = document.querySelectorAll('.friday');
  for (let index = 0; index < friday.length; index += 1) {
    if (contadorSexta % 2 == 0) {
      friday[index].style.backgroundColor = '#2fc18c';
    } else {
      friday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

//Exercício 6:
let dias = document.querySelectorAll('.day');
function eventoMouse(evento, dias, pixel) {
  for (let index = 0; index < dias.length; index += 1) {
    dias[index].addEventListener(evento, function (event) {
      event.target.style.fontSize = pixel;
    });
  }
}
eventoMouse('mouseover', dias, '28px');
eventoMouse('mouseout', dias, '20px');

// Exercicio 7:
let minhasTarefas = document.querySelector('.my-tasks');
function criarTarefa(tarefa) {
  let tarefaCriada = document.createElement('span');
  tarefaCriada.innerText = tarefa;
  minhasTarefas.appendChild(tarefaCriada);
}
criarTarefa('Cozinhar');

// Exercicio 8:
function corLegenda(cor) {
  let criarLegenda = document.createElement('div');
  criarLegenda.style.backgroundColor = cor;
  criarLegenda.classList = 'task';
  minhasTarefas.append(criarLegenda);
}
corLegenda('red');

// Exercicio 9:
let contadorLegenda = 1;
let legenda = document.querySelector('.task');
legenda.addEventListener('click', function () {
  contadorLegenda += 1;
  if (contadorLegenda % 2 === 0) {
    legenda.classList.add('selected');
  } else {
    legenda.classList.remove('selected');
  }
});

// Exercicio 10:
dias.forEach(marcar);
function marcar(element) {
  element.addEventListener('click', function (event) {
    let result = element.classList.toggle('day');
    if (result === false) {
      event.target.style.backgroundColor =
        document.querySelector('.selected').style.backgroundColor;
    } else {
      event.target.style.backgroundColor = 'rgb(238,238,238)';
    }
  });
}

// Bônus
let botaoAdd = document.querySelector('#btn-add');
let inputCompromisso = document.querySelector('#task-input');
let inputContainer = document.querySelector('.input-container');
botaoAdd.addEventListener('click', criarCompromisso);
inputCompromisso.addEventListener('keydown', enter);
function enter(event) {
  if (event.key == 'Enter') {
    criarCompromisso();
  }
}
function criarCompromisso() {
  if (inputCompromisso.value.length === 0) {
    alert('Erro! A caixa não pode estar vazia!');
  } else {
    let div = document.createElement('div');
    div.innerText = inputCompromisso.value;
    inputContainer.appendChild(div);
    inputCompromisso.value = '';
  }
}
