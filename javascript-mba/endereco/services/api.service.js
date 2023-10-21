const api = 'https://viacep.com.br/ws';

async function getEnderecoByCep(cep) {
    const res = await fetch(`${api}/${cep}/json`);
    return await res.json();
}

export default getEnderecoByCep;