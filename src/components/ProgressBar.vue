<template>
    <p class="progress-bar">Progress Bar: {{progress}}</p>
</template>

<script>
export default {
    name: "ProgressBar",
    computed: {
        progress(){
            return Math.round(this.$store.state.todos.filter(todo=>todo.completed).length/this.$store.state.todos.length*100)
        }
    }
}
</script>

<style>
.progress-bar {
    padding:5px;
    text-align: center;
    background: rgb(106,248,118);
    color:black
}
</style>