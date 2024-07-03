<script setup lang="ts">
  import { useTodoListStore, type ITask } from '../stores/todoList'
  import todoItem from './todoItem.vue';

  const todoList = useTodoListStore()

  const deleteTaskCheck = (task: ITask) => {
    todoList.deleteTask(task)
  }
  const changeTaskStatusCheck = (task: ITask) => {
    todoList.changeTaskStatus(task)
  }
</script>

<template>
  <ul class="todo_list">
    <todoItem v-for="task in todoList.tasks" :key="task.id" :task="task" :delete-task="deleteTaskCheck" :change-task-status="changeTaskStatusCheck"/>
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