<template>
  <div class="container">
    <div class="menu">
      <div class="icone-menu">
          <h2>
            <a class="logo" href="/">
              <img src="../public/img/biblia.png" alt="">
            </a>
            </h2>
      </div>
      <div class="barra-pesquisa">
        <form @submit.prevent="buscarVerso" >
            <input type="text" 
              v-model="buscarVersiculo"
              placeholder="Buscar por versículo...">
        </form>
      </div>
    </div>

    <router-view
      :versiculos="versiculos"/>

  </div>
  
</template>

<script>
import { buscarVersiculo } from './services/biblia-service.js';
export default {
  name: 'Bíblia Online',
  data(){
    return{
      buscarVersiculo: '',
      versiculos: []
    }
  },
  mounted(){
    
  },
  components: {
  },
  methods:{
    async buscarVerso(Event){
      if(Event.type == 'submit'){
        this.$router.push('/buscarVersiculo');
        const buscar = this.buscarVersiculo;

        buscarVersiculo(buscar).then(resp => {
          this.versiculos.push({
            nome: resp.verses.book.name,
            capitulo: resp.verses.chapter,
            verso: resp.verses.number,
            texto: resp.verses.text
          });
        });
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.logo{
  text-decoration: none;
  color: white;
}

.logo img{
  width: 60px;
  height: 60px;
  margin-left: 30px;
}

.menu{
  display: flex;
  background-color: lightgray;
  height: 100px;
  color: white;
  font-size: 20px;
  border-radius: 5px;
}

.icone-menu{
  flex: 1 1 0;
  margin-left: 20px;
  max-width: 25%;
}

.barra-pesquisa{
  flex: 1 1 0;
}

.barra-pesquisa input{
  margin-top: 30px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  font-size: 20px;
}
</style>
