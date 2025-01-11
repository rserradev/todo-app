<script setup>
import { ref } from 'vue';

// Variables
const title = ref(''); // Titulo de la tarea
const newTask = ref(''); // Nueva Tarea
const tasks = ref([]); // Lista de Tareas
const filter = ref('all'); // Filtro de tareas

const addTask = (description) => {
    if (description === '') return;
    tasks.value.push({
        id: Date.now(),
        title: title,
        description: description,
        completed: false
     });
    newTask.value = '';
}

// Logica para completar una tarea
const completeTask = (id) => {
    // Buscar el id de la tarea que se quiere completar
    const task = tasks.value.find(task => task.id === id);
    // Cambiar el estado de la tarea, si esta completada cambiar a false y viceversa
    task.completed = !task.completed;
}

// Logica para modificar una tarea
const modifyTask = (id) => {
    // Buscar el id de la tarea que se quiere modificar
    const task = tasks.value.find(task => task.id === id);
    // Cambiar el nombre de la tarea
    task.description = 'New Name';
}

// Funcion para eliminar una tarea
const deleteTask = (id) => {
    // Filtrar las tareas que no tengan el id que se quiere eliminar
    // El metodo filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    tasks.value = tasks.value.filter(task => task.id !== id);
}
</script>

<template>
    <h1>task list</h1>

    <input
        v-model="title"
        placeholder="Title"
    />
    <br>
    <!-- Input para añadir una nueva tarea -->
    <input
        v-model="newTask"
        type="text"
        placeholder="Type description of the task"
    />

    <!-- Botón para añadir la tarea -->
    <button @click="addTask(newTask)"> Add Task</button>

    <!-- Mostrar el texto de la nueva tarea -->
    <label > {{ newTask }}</label>

    <input type="text">asdasdasd
    <!-- Lista de tareas -->
    <ul>
        <!-- Iterar sobre la lista de tareas -->
        <li v-for="(task, index) in tasks" :key="index">
                {{ task.id }}
                <h1 placeholder="Title"></h1>
                <hr>
                <input type="text" v-model="tasks[index].name">
                
                {{ task.description }}
                {{ task.completed }}

                <button
                    @click="completeTask(task.id)">
                    Complete
                </button>
                
                <button
                    @click="modifyTask(task.id)">
                    Modify
                </button>

                <button 
                    @click="deleteTask(task.id)">
                    Delete
                </button>
        </li>
    </ul>
</template>