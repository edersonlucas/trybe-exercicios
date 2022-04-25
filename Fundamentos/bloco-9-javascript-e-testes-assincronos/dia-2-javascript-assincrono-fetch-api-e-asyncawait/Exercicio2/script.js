const lista = document.getElementById('lista')
const botaoTop10 = document.getElementById('top10')
const botaoTodas = document.getElementById('todas')

function loading() {
  const img = document.createElement('img')
  img.className = 'loading'
  img.src = 'loading.svg'
  lista.appendChild(img)
  setTimeout(() => {
    lista.innerHTML = ''
  }, 1500)
}

botaoTop10.addEventListener('click', () => {
  lista.innerHTML = '';
  apiRequest(10)
})
botaoTodas.addEventListener('click', () => {
  lista.innerHTML = '';
  apiRequest()
})

const criarLi = (elemento, dado) => {
  const li = document.createElement('li')
  const h1 = document.createElement('h1')
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  const img = document.createElement('img')
  const tagA = document.createElement('a')
  img.className = 'img-bitcoin'
  h1.className = 'nome-bitcoin'
  h2.className = 'abreviacao-bitcoin'
  h3.className = 'valor-bitcoin'
  tagA.id = 'links'
  tagA.target = '_blank'
  h1.innerText = dado.name
  h2.innerText = `(${dado.symbol})`
  h3.innerText = Number(dado.priceUsd).toLocaleString('pt-br', { style: 'currency', currency: 'USD' })
  img.src = 'https://cdn.pixabay.com/photo/2019/06/23/19/15/bitcoin-4294492_1280.png'
  tagA.href = dado.explorer
  tagA.appendChild(h1)
  tagA.appendChild(h2)
  tagA.appendChild(h3)
  tagA.appendChild(img)
  li.appendChild(tagA)
  elemento.appendChild(li)
}

function apiRequest(top) {
  loading()
  setTimeout(() => {
    const urlAPI = 'https://api.coincap.io/v2/assets'
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    fetch(urlAPI, myObject)
      .then((response) => response.json())
      .then((datas) => {
        console.log(datas);
        datas.data.forEach((data) => {

          if (top) {
            if (data.rank <= top) {
              criarLi(lista, data)
            }
          } else {
            criarLi(lista, data)
          }

        })
      })
      .catch((err) => console.log(err))
  }, 1400)
}

window.onload = () => apiRequest();