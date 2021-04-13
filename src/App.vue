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
        <input type="text" name="" id="" placeholder="Buscar por versículo...">
      </div>
    </div>
    <router-view/>
  </div>
  
</template>

<script>

export default {
  name: 'Bíblia Online',
  data(){
    return{
    }
  },
  components: {
  },
  methods:{
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
