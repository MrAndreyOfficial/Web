<script setup>
  import { ref } from 'vue';

  const generatedPassword = ref('');
  const lengthPassword = ref(0);

 function generatePassword() {
    generatedPassword.value = '';

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < lengthPassword.value; i++) {
      const symbolIndex = Math.floor(Math.random() * charset.length);
      const symbol = charset[symbolIndex];

      generatedPassword.value += symbol;
    }
  }
</script>

<template>
  <main class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
    <div class="field is-grouped">
      <input type="number" class="input p-4" v-model="lengthPassword" @change="lengthPassword < 0 ? lengthPassword = 0 : lengthPassword" placeholder="Password Length" id="password-length">
      <button class="button is-primary" v-on:click='generatePassword()'>Generate</button>
    </div>
    <label class="title has-text-dark is-1 mt-3">{{ generatedPassword }}</label>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
  }

  .input {
    width: 30rem;
  }

  .input, .button {
    font-size: 1.5rem;
  }
</style>
