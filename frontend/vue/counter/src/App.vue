<script setup>
  import { saveData, loadData } from './storage';

  import { ref } from 'vue';

  const counter = ref(loadData('counter') || 0);

  function increaseCounter() {
    counter.value++;
    saveData('counter', counter.value);
  }

  function decreaseCounter() {
    counter.value--;
    saveData('counter', counter.value);
  }
</script>

<template>
  <div class="container is-flex is-justify-content-center is-align-items-center">
    <div class="is-flex is-flex-direction-column is-align-items-center">
      <div class="control mb-5">
        <p id="counter" class="has-text-weight-bold">{{ counter }}</p>
      </div>
      <div class="buttons has-addons">
        <button class="button is-primary is-rounded has-text-weight-bold" @click="increaseCounter">+</button>
        <button class="button is-danger is-rounded has-text-weight-bold" @click="decreaseCounter">-</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    height: 100vh;
  }

  #counter {
    font-size: 60px;
  }

  .button {
    font-size: 24px;
    width: 200px;
  }
</style>
