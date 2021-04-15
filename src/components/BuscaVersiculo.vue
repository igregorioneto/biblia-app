<template>
    <p>versiculo</p>
    <div v-for="(verso,index) in versiculos" :key="index">
        <p>{{verso.nome}}</p>
    </div>
</template>

<script>
export default {
    props:{
        versiculos: Array,
    }
}
</script>

<style scoped>

</style>