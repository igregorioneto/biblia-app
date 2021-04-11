import axios from 'axios';

const getLivros = async () => {
    const resp = await axios.get('https://www.abibliadigital.com.br/api/books');
    return resp.data;
}

const getDetalheLivro = async (abreviacao) => {
    const resp = await axios.get(`https://www.abibliadigital.com.br/api/books/${abreviacao}`);
    return resp.data;
}

export{
    getLivros,
    getDetalheLivro
}