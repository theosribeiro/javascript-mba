import api from '../service/bandeira.service.js';

async function loadFlags() {
    const res = await fetch('/imagens');
    const flags = await res.json();
    let flagsView = '';

    for (const flag of flags) {
      flagsView += `<div class="flag col-2 my-2 text-center">
        <img src="${flag.image}" alt="${flag.name}">
        <p>${flag.name}</p>
      </div>`;
    }

    document.querySelector('main').innerHTML = flagsView;
  }

  loadFlags();