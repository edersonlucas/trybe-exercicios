const lista = document.getElementById('lista')
const botaoTop10 = document.getElementById('top10')
const botaoTodas = document.getElementById('todas')
const footer = document.getElementById('footer')
const buscar = document.getElementById('buscar')
let datas;
let dolar;
buscar.addEventListener('keyup', (event) => {
  loading()
  const filtrados = datas.filter((elemento) => elemento.name.toUpperCase().startsWith(buscar.value.toUpperCase()))
  lista.innerHTML = ''
  if (filtrados.length === 0) {
    lista.innerHTML = `Nenhum resultado para '${buscar.value}'`
  } else {
    filtrados.forEach((dado) => {
      criarLi(lista, dado, dolar)
    })
  }
})

function loading() {
  const img = document.createElement('img')
  img.className = 'loading'
  img.src = 'loading.svg'
  lista.appendChild(img)
}

botaoTop10.addEventListener('click', () => {
  lista.innerHTML = '';
  apiRequest(10)
})
botaoTodas.addEventListener('click', () => {
  lista.innerHTML = '';
  apiRequest()
})

function criarElemento(tipo) {
  return document.createElement(tipo)
}

const criarLi = (elemento, dado, dolar) => {
  const li = criarElemento('li')
  const h1 = criarElemento('h1')
  const h2 = criarElemento('h2')
  const h3 = criarElemento('h3')
  const h3Bra = criarElemento('h3')
  const img = criarElemento('img')
  const tagA = criarElemento('a')
  img.className = 'img-bitcoin'
  h1.className = 'nome-bitcoin'
  h2.className = 'abreviacao-bitcoin'
  h3.className = 'valor-bitcoin'
  h3Bra.className = 'valor-bitcoin'
  tagA.id = 'links'
  tagA.target = '_blank'
  h1.innerText = dado.name
  h2.innerText = `(${dado.symbol})`
  h3.innerText = Number(dado.priceUsd).toLocaleString('pt-br', { style: 'currency', currency: 'USD' })
  h3Bra.innerText = Number(dado.priceUsd * dolar).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  img.src = 'https://cdn.pixabay.com/photo/2019/06/23/19/15/bitcoin-4294492_1280.png'
  tagA.href = dado.explorer
  tagA.appendChild(h1)
  tagA.appendChild(h2)
  tagA.appendChild(h3)
  tagA.appendChild(h3Bra)
  tagA.appendChild(img)
  li.appendChild(tagA)
  elemento.appendChild(li)
}

async function cotacao() {
  const urlAPI = 'https://economia.awesomeapi.com.br/last/USD-BRL'
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const result = await fetch(urlAPI, myObject)
  const datas = await result.json()
  return datas.USDBRL.bid
}

async function cryptos() {
  const urlAPI = 'https://api.coincap.io/v2/assets'
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const result = await fetch(urlAPI, myObject)
  const datas = await result.json()
  return datas.data
}

async function apiRequest(top) {
  loading()
  if (datas || dolar) {
    lista.innerHTML = ''
    datas.forEach((data) => {
      if (top) {
        if (data.rank <= top) {
          criarLi(lista, data, dolar)
        }
      } else {
        criarLi(lista, data, dolar)
      }
    })
  } else {
    dolar = await cotacao();
    datas = await cryptos();
    lista.innerHTML = ''
    datas.forEach((data) => {
      if (top) {
        if (data.rank <= top) {
          criarLi(lista, data, dolar)
        }
      } else {
        criarLi(lista, data, dolar)
      }
    })
  }
}

window.onload = () => apiRequest();


// function apiRequest(top) {
//   loading()
//   setTimeout(() => {
//     lista.innerHTML = ''
//     const urlAPI = 'https://api.coincap.io/v2/assets'
//     const myObject = {
//       method: 'GET',
//       headers: { 'Accept': 'application/json' }
//     };

//     fetch(urlAPI, myObject)
//       .then((response) => response.json())
//       .then((datas) => {
//         datas.data.forEach((data) => {

//           if (top) {
//             if (data.rank <= top) {
//               criarLi(lista, data)
//             }
//           } else {
//             criarLi(lista, data)
//           }

//         })
//       })
//       .catch((err) => console.log(err))
//   }, 1000)
// }