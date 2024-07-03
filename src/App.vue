<script setup lang="ts">
  import todoForm from './components/todoForm.vue'
  import todoList from './components/todoList.vue'
  import { useTodoListStore } from './stores/todoList';

  const todo_list = useTodoListStore()
  const addTaskCheck = (name:string) => {
    todo_list.addTask(name)
  }

</script>

<template>
  <h1 class="title">
    Todo-List with Vitest
  </h1>
  <div class="container">
    <todoForm :addTask="addTaskCheck" :counter="todo_list.counter"/>
    <todoList class="todo_list"/>
  </div>
</template>

<style scoped>
  .title {
    margin-bottom: 50px;
  }
  .container {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .todo_list {
    margin-top: 20px;
  }
</style>
