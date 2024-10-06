<script setup>
  import { ref } from 'vue';

  const todos = ref([]);

  const todoName = ref(null);

  function addTodo() {
    if (!todoName) {
      alert('Enter a task name');
      return;
    }

    todos.value.push(todoName.value);

    todoName.value = null;
  }

  function removeTodo(id) {
    todos.value.splice(id, 1);
  }
</script>

<template>
  <div class="mt-4 is-flex is-flex-direction-column is-align-items-center">
    <input type="text" class="input is-success" placeholder="Todo name" v-model="todoName">
    <button @click="addTodo" class="button mt-3 is-primary">Add Todo</button>

    <ul class="todos is-flex is-flex-direction-column is-align-items-center mt-3">
      <li class="todo-name" @click="() => removeTodo(index)" v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<style>
  .input {
    width: 500px;
  }

  .button {
    width: 250px;
  }

  .todo-name {
    font-size: 24px;
    cursor: pointer;
  }
</style>
