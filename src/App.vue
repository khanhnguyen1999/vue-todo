<template>
  <div id="app">
    <Navbar/>
    <Todos/> 
    <StatusBar/>
    <ProgressBar/>
  </div>
</template>

<script>

import Todos from './components/Todos.vue'
import Navbar from './components/Navbar.vue'
import StatusBar from './components/StatusBar.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
  name: 'App',
  components: {
    Todos,
    Navbar,
    StatusBar,
    ProgressBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
