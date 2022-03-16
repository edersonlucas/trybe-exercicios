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
function criaBotao(string, id) {
  let botao = document.createElement('button');
  botao.innerText = string;
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
