<script setup lang="ts">
  import { useTodoListStore } from '../stores/todoList'
  import { ref } from 'vue';

  const todoList = useTodoListStore()
  let input = ref('')
</script>

<template>
  <form class="form" @submit.prevent="todoList.addTask(input, 'this is a basic description'), input = ''">
    <input type="text" class="input" v-model="input">
    <button class="btn">+</button>
  </form>
</template>

<style scoped>

</style>