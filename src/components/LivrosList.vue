<template>

    <div class="container-livros">
        <div class="velho-testamento">
        <h3>Velho Testamento</h3>
        <div>
            <ul v-for="(livro,index) in livros" :key="index">
                <li v-if="livro.testament === 'VT'" >
                    <a :href="livro.abbrev.pt">{{livro.name}}</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="novo-testamento">
        <h3>Novo Testamento</h3>
        <div>
            <ul v-for="(livro,index) in livros" :key="index">
                <li v-if="livro.testament === 'NT'">
                    <a :href="livro.abbrev.pt">{{livro.name}}</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
    


</template>

<script>
import { getLivros } from '../services/biblia-service.js';
export default {
    data(){
        return{
            livros: '',
        }
    },
    mounted(){
        getLivros().then(resp => {
            this.livros = resp;
        });
    },
    methods:{
    }
}
</script>

<style scoped>
.container-livros{
  border: 1px solid lightgray;
  max-width: 80%;
  height: 100%;
  margin-left: 100px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

ul,li{
    list-style: none;
}

ul,li, a {
    text-decoration: none;
}

.velho-testamento{
  flex: 1 1 0;
}

.novo-testamento{
  flex: 1 1 0;
}
</style>