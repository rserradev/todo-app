<script setup>
import { ref } from 'vue';

const newTask = ref(''); // Nueva Tarea
const tasks = ref([]); // Lista de Tareas

const addTask = (name) => {
    if (name === '') return;
    tasks.value.push({
        id: Date.now(),
        name: name,
        completed: false
     });
    newTask.value = '';
}

</script>

<template>
    <h1>task list</h1>

    <!-- Input para añadir una nueva tarea -->
    <input
        v-model="newTask"
        type="text"
        placeholder="Type new task"
    />

    <!-- Botón para añadir la tarea -->
    <button @click="addTask"> Add </button>

    <!-- Mostrar el texto de la nueva tarea -->
    <label > {{ newTask }}</label>

    <!-- Lista de tareas -->
    <ul>
        <li
            v-for="task in tasks"
            :key="task.id">
                {{ task }}
        </li>
    </ul>
</template>