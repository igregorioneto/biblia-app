<template>
    
    <div class="container-capitulos">
        <h2>Você esta na seleção do livro de {{nomeLivro}}</h2>

        <div>
            <ul v-for="(cap,index) in capitulos" :key="index">
                <li>
                    <a :href="abbrev +'/'+ cap">Capítulo {{cap}}</a>
                </li>
            </ul>
        </div>
    </div>
    
    

</template>

<script>
import { getDetalheLivro } from '../services/biblia-service.js';
import { useRoute } from 'vue-router';
export default {
    data(){
        return{
            capitulos: 0,
            nomeLivro: '',
            abbrev: '',
            rota: ''
        }
    },
    mounted(){
        
        const route = useRoute();
        const abrevvLivro = route.params.nomeLivro;
        this.abbrev = abrevvLivro;
        getDetalheLivro(abrevvLivro).then(resp => {
            this.capitulos = resp.chapters;
            this.nomeLivro = resp.name;
        }).catch(e => {
            console.log(e);
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

.container-capitulos{
    width: 80%;
    border: 1px solid lightgray;
    margin-left: 100px;
}
.container-capitulos h2{
    text-align: center;
}
</style>