import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import LivrosList from './components/LivrosList.vue';
import LivroDetalhe from './components/LivroDetalhe.vue';
import capituloLivro from './components/CapituloLivro.vue';
import BuscaVersiculo from './components/BuscaVersiculo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/" , component:LivrosList },
        {path:"/:nomeLivro", name:"livro", component: LivroDetalhe},
        {path:"/:nomeLivro/:capitulo", name:"capituloLivro", component: capituloLivro},
        {path:"/buscarVersiculo", component: BuscaVersiculo}
    ]
});


const app = createApp(App);
app.component('LivrosList',LivrosList);
app.component('LivroDetalhe',LivroDetalhe);
app.component('BuscaVersiculo',BuscaVersiculo);
app.use(router);
app.mount('#app');
