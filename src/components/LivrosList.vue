<template>
    <div class="container-principal">
        <div class="container-livros">
            <div id="texto-livro">
                <h3>Velho Testamento</h3>
                <div>
                    <ul v-for="(livro,index) in livros" :key="index">
                        <li v-if="livro.testament === 'VT'" >
                            <a :href="livro.abbrev.pt">{{livro.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="texto-livro">
                <h3>Novo Testamento</h3>
                <div class="novo-testamento">
                    <ul v-for="(livro,index) in livros" :key="index">
                        <li v-if="livro.testament === 'NT'">
                            <a :href="livro.abbrev.pt">{{livro.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-if="!nomeDoLivro == ''" class="versiculo-do-dia">
            <h4>{{nomeDoLivro}}, {{capitulo}}:{{numeroVerso}}</h4>
            <div>
                <p>{{versiculo}}</p>
            </div>
        </div>
    </div>
    
    


</template>

<script>
import { getLivros, getVersiculoAleatorio } from '../services/biblia-service.js';
export default {
    data(){
        return{
            livros: '',
            nomeDoLivro: 'Josué',
            versiculo: 'Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.',
            capitulo: 1,
            numeroVerso: 9,
            
        }
    },
    mounted(){
        getLivros().then(resp => {
            this.livros = resp;
        });

        getVersiculoAleatorio().then(resp => {
            setInterval(() => {
                this.nomeDoLivro = resp.book.name;
                this.versiculo = resp.text;
                this.capitulo = resp.chapter;
                this.numeroVerso = resp.number;
            },2000);
        });
    },
    methods:{
    }
}
</script>

<style scoped>
.container-principal{
    display: flex;
}
.container-livros{
  max-width: 80%;
  height: 100%;
  margin-left: 40px;
  flex:1 1 0;
}

ul,li{
    list-style: none;
}

ul,li, a {
    text-decoration: none;
}

ul, li, a:visited{
    color: blue;
}

#texto-livro{
    width: 90%;
    margin-top: 15px;
    border: 2px solid lightgrey;
    border-radius: 5px;
}

#texto-livro h3{
    font-size: 30px;
    margin-left: 30px;
}

#texto-livro ul,li,a{
    font-size: 20px;
    display: inline-block ;
    text-align: center;
    padding-right: 5px;
}

.novo-testamento{
    margin-top: -120px;
    margin-bottom: 60px;
}

.versiculo-do-dia{
    border: 2px solid lightgray;
    max-width: 30%;
    height: 170px;
    margin-top: 15px;
    margin-right: 30px;
    border-radius: 5px;
    flex: 1 1 0;
}

.versiculo-do-dia h4{
    margin-left: 10px;
}

.versiculo-do-dia p{
    margin-left: 10px;
}

</style>