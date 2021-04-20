import Vue from 'vue';
import Router from 'vue-router';

import BuscaVersiculo from '@/components/BuscaVersiculo.vue';
import CapituloLivro from '@/components/CapituloLivro.vue';
import LivroDetalhe from '@/components/LivroDetalhe.vue';
import LivrosList from '@/components/LivrosList.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {
            name: 'listagem',
            path: '/',
            component: LivrosList
        },
        {
            name: 'livro',
            path: '/:nomeLivro',
            component: LivroDetalhe,
        },
        {
            name: 'capituloLivro',
            path: '/:nomeLivro/:capitulo',
            component: CapituloLivro
        },
        {
            name: 'buscar',
            path: '/buscarVersiculo',
            component: BuscaVersiculo
        }
    ]
});
