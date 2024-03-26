<script setup lang="ts">
  import { useTodoListStore } from '../stores/todoList'
  import todoItem from './todoItem.vue';

  const todoList = useTodoListStore()
</script>

<template>
  <ul class="todo_list">
    <todoItem v-for="task in todoList.tasks" :key="task.id" :item="task"/>
  </ul>
</template>

<style scoped>

</style>