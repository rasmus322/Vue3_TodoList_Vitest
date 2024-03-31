<script setup lang="ts">
  import { useTodoListStore } from '../stores/todoList'
  import todoItem from './todoItem.vue';

  const todoList = useTodoListStore()

  const deleteTaskCheck = (item:object) => {
    todoList.deleteTask(item)
  }
  const changeTaskStatusCheck = (item:object) => {
    todoList.changeTaskStatus(item)
  }
</script>

<template>
  <ul class="todo_list">
    <todoItem v-for="item in todoList.tasks" :item="item" :delete="deleteTaskCheck" :change="changeTaskStatusCheck"/>
  </ul>
</template>

<style scoped>
  .todo_list {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    outline: 1px solid #424242;
  }
</style>