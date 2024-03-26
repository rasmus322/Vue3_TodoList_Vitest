<script setup lang="ts">
  const props = defineProps(['item'])

</script>

<template>
  <li class="todo_item">
    <p class="id"> {{ item.id }} </p>
    <h3 class="name"> {{ item.name }} </h3>
    <button class="btn">-</button>
  </li>
</template>

<style scoped>
  .todo_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>