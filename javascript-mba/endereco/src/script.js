import api from '../services/api.service.js';

async function getEndereco() {
    let cep = document.getElementById('cep').value;

    let validacaoCEP = /^[0-9]{8}$/;

    if (!validacaoCEP.test(cep)) return;

    let conteudo = await api(cep);

    console.log("conteudo: ", conteudo);

    preencherDados(conteudo);


}

function preencherDados(conteudo) {
    document.getElementById('estado').value = conteudo.uf;
    document.getElementById('cidade').value = conteudo.localidade;
    document.getElementById('bairro').value = conteudo.bairro;
    document.getElementById('rua').value = conteudo.logradouro;
    document.getElementById('numero').value = conteudo.complemento;
}

let cep = document.getElementById('cep');
cep.addEventListener("keyup", getEndereco);