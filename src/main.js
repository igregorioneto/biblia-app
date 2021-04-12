import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import LivrosList from './components/LivrosList.vue';
import LivroDetalhe from './components/LivroDetalhe.vue';
import capituloLivro from './components/CapituloLivro.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/" , component:LivrosList },
        {path:"/:nomeLivro", name:"livro", component: LivroDetalhe},
        {path:"/:nomeLivro/:capitulo", name:"capituloLivro", component: capituloLivro}
    ]
});


const app = createApp(App);
app.component('LivrosList',LivrosList);
app.component('LivroDetalhe',LivroDetalhe);
app.use(router);
app.mount('#app');
