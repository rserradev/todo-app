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

/**
 * TODO: Funcion para marcar la tarea como completada, hay que hacer esta funcion
 */

const deleteTask = (id) => {
    // Filtrar las tareas que no tengan el id que se quiere eliminar
    // El metodo filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    tasks.value = tasks.value.filter(task => task.id !== id);
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
    <button @click="addTask(newTask)"> Add </button>

    <!-- Mostrar el texto de la nueva tarea -->
    <label > {{ newTask }}</label>

    <!-- Lista de tareas -->
    <ul>
        <li
            v-for="task in tasks"
            :key="task.id">
                {{ task.id }}
                {{ task.name }}
                {{ task.completed }}
                <button>Complete</button>
                <button @click="deleteTask(task.id)">Delete</button>
        </li>
    </ul>
</template>