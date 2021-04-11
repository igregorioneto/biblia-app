import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import LivrosList from './components/LivrosList.vue';
import LivroDetalhe from './components/LivroDetalhe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/" , component:LivrosList },
        {path:"/:nomeLivro", name:"livro", component: LivroDetalhe},
    ]
});


const app = createApp(App);
app.component('LivrosList',LivrosList);
app.component('LivroDetalhe',LivroDetalhe);
app.use(router);
app.mount('#app');
