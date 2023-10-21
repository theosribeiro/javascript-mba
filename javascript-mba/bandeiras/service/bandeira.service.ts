const api = '../imagens'

async function read() {
    const res = await fetch(`${api}`)
    return await res.json();
}

export default read;