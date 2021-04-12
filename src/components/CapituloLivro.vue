<template>
    <div>
        <h2>{{nomeLivro}} - Capitulo {{capituloLivro}}</h2>

        <div>
            <ul v-for="(versiculo,index) in versiculosLivro" :key="index">
                <li><span>{{versiculo.number}}</span> {{versiculo.text}}</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import { getCapituloLivro } from '../services/biblia-service.js';
import { useRoute } from 'vue-router';
export default {
    data(){
        return{
            versiculosLivro: [],
            nomeLivro: '',
            capituloLivro: ''
        }
    },
    mounted(){
        const route = useRoute();
        const abreviacao = route.params.nomeLivro;
        const capitulo = route.params.capitulo;

        this.capituloLivro = capitulo;
        getCapituloLivro(abreviacao,capitulo).then(resp => {
            this.versiculosLivro = resp.verses;
            this.nomeLivro = resp.book.name;
        });
    }
}
</script>

<style scoped>
ul,li{
    list-style: none;
}

ul,li, a {
    text-decoration: none;
}
</style>