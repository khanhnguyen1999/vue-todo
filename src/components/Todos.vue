<template>
  <div class="todo-list">
      <ul v-if="auth.isAuthenticated">
          <li v-for="todo in todos" :key="todo.id">
              {{todo.title}}
          </li>
      </ul>
      <p v-else style="text-aligh:center">Not authorised</p>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name:"Todos",
    // type 1
    // computed:{
    //     todos(){
    //         return this.$store.state.todos
    //     },
    //     isAuthenticated(){
    //         return this.$store.state.auth.isAuthenticated
    //     }
    // }

    // type 2
    // computed: mapState({
    //     todos:state=>state.todos,
    //     isAuthenticated: state=>state.auth.isAuthenticated
    // })
    
    // type 3
     computed: mapState(['todos','auth'])
}
</script>

<style>
.todo-list ul {
    padding:0 10px 10px 10px;
    list-style-type: none;
}
.todo-list li {
    padding:10px;
    cursor: pointer;
    margin:10px 0;
    border-radius:4px;
    background: rgb(240,240,240);
    color:black
}
</style>