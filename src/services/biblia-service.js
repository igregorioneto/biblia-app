import axios from 'axios';

const getLivros = async () => {
    const resp = await axios.get('https://www.abibliadigital.com.br/api/books');
    return resp.data;
}

const getDetalheLivro = async (abreviacao) => {
    const resp = await axios.get(`https://www.abibliadigital.com.br/api/books/${abreviacao}`);
    return resp.data;
}

const getCapituloLivro = async (abreviacao,capitulo) => {
    const resp = await 
        axios.get(`https://www.abibliadigital.com.br/api/verses/nvi/${abreviacao}/${capitulo}`);
    return resp.data;
}

const getVersiculoAleatorio = async () => {
    const resp = await axios.get(`https://www.abibliadigital.com.br/api/verses/nvi/random`);
    return resp.data;
}

export{
    getLivros,
    getDetalheLivro,
    getCapituloLivro,
    getVersiculoAleatorio
}