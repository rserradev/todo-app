<script setup>
import { ref } from 'vue';

const newTask = ref('');

const addTask = () => {
    console.log(newTask.value);
    newTask.value = '';
}
</script>

<template>
    <h1>task list</h1>
    <input v-model="newTask" type="text" placeholder="Type new task"/>
    <button @click="addTask"> Add </button>
    <label > {{ newTask }}</label>
</template>