<template>
  <div id="app">
  <h1>Nilai 1 sampai 50</h1>
  <ul>
    <li v-for="number in numbers" :key="number"> {{ number }}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      numbers: Array.from({length: 50}, (_,i) => i + 1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li{
  list-style-type: none;
}
</style>
