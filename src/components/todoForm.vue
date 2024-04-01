<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps(['addTask', 'counter'])

  let input = ref('')
  
</script>

<template>
  <p class="indicator" v-if="counter === 0">
    You have completed all tasks!
  </p>
  <p class="indicator" v-else>
    You have <span> {{ counter }} </span> tasks left
  </p>
  <form class="form" @submit.prevent="props.addTask(input, 'this is a description'), input = ''">
    <input type="text" class="input" v-model="input">
    <button class="btn" type="submit">+</button>
  </form>
</template>

<style scoped>
  .form {
    width: 70%;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .input {
    width: 90%;
    height: 100%;
    background: none;
    border: none;
    color: #fff;
    font-size: 13px;
    outline: 1px solid #424242;
    border-radius: 10px 0 0 10px;
    padding: 20px 15px;
  }
  .btn {
    width: 10%;
    height: 100%;
    font-weight: bold;
    font-size: 32px;
    cursor: pointer;
    color: teal;
    background: none;
    border: none;
    outline: 1px solid #424242;
    border-radius: 0 10px 10px 0;
    padding: 9px 0;
    margin-left: 1px;
  }
  .indicator {
    margin-bottom: 10px;
  }
  .indicator span {
    font-weight: bold;
  }
</style>