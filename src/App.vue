<script setup lang="ts">
  import todoForm from './components/todoForm.vue'
  import todoList from './components/todoList.vue'

</script>

<template>
  <div class="container">
    <todoForm/>
    <todoList/>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
