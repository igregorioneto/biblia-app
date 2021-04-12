<template>
  <div class="container">
    <div class="menu">
      <div class="icone-menu">
          <h2>Bíblia-APP</h2>
      </div>
      <div class="barra-pesquisa">
        <input type="text" name="" id="" placeholder="Buscar...">
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

.menu{
  display: flex;
  background-color: midnightblue;
  height: 80px;
  color: white;
  font-size: 20px;
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
  margin-top: 25px;
  width: 70%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  font-size: 20px;
}
</style>
