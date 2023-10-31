// const fetch = require('node-fetch');

// const url = 'http://localhost:5000/imagens';


import bandeiras from './js/model/bandeiras.js';
// const bandeiras = require('./js/model/bandeiras.js');
const main = document.querySelector('main');

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const images = data.imagens;
//     console.log('Lista de imagens:', images);
//     let flagsView = '';

//     for (const bandeira of bandeiras) {
//       flagsView += `<div class="flag col-2 my-2 text-center">
//         <img src="${bandeira.image}" alt="${bandeira.name}">
//         <p>${bandeira.name}</p>
//       </div>`;
//     }
      
//     console.log("flagsView: ", flagsView)
//     document.querySelector('main').innerHTML = flagsView;


//   })
//   .catch(error => console.error('Erro ao obter a lista de imagens:', error));

function criarBandeira(bandeira) {
  return `<div class="flag col-2 my-2 text-center">
    <img src="${bandeira.image}" alt="${bandeira.name}">
    <p>${bandeira.name}</p>
  </div>`;
}

for(const bandeira of bandeiras) {
  main.insertAdjacentHTML('beforeend', criarBandeira(bandeira));
}