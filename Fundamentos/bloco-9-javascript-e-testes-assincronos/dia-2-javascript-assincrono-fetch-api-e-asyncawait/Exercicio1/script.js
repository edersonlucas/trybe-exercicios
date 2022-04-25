// apiScript.js
// gerar Titulo

const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  fetch(`${API_URL}slack`)
    .then((result) => result.json())
    .then((resultJson) => {
      document.getElementById('jokeContainer').innerText = resultJson.attachments[0].fallback
    })
};


window.onload = () => fetchJoke();
