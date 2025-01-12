<script setup>
import { ref } from 'vue';

// Variables
const title = ref(''); // Titulo de la tarea
const description = ref(''); // Nueva Tarea
const tasks = ref([]); // Lista de Tareas
const completedTasks = ref([]); // Lista de tareas completadas
const uncompletedTasks = ref([]); // Lista de tareas no completadas
const deletedTasks = ref([]); // Lista de tareas eliminadas
const modifiedTasks = ref([]); // Lista de tareas modificadas
const filter = ref('all'); // Filtro de tareas

const addTask = () => {
    if (title.value === '' || description.value === '') return;
    
    tasks.value.push({
        id: Date.now(),
        title: title.value,
        description: description.value,
        completed: false
    });

    title.value = '';
    description.value = '';
}

// Logica para completar una tarea
const completeTask = (id) => {
    const task = tasks.value.find(task => task.id === id);
    task.completed = !task.completed;
}

// Logica para modificar una tarea
const modifyTask = (id) => {
    const task = tasks.value.find(task => task.id === id);
}

// Funcion para eliminar una tarea
const deleteTask = (id) => {
    if (window.confirm('Esta seguro que quiere eliminar la tarea?') === true) {
        const task = tasks.value.find(task => task.id === id); // Busca la tarea por el id
        deletedTasks.value.push(task); // Añade la tarea eliminada al array de tareas eliminadas
        tasks.value = tasks.value.filter(task => task.id !== id); // Filtra el array y devuelve el resto de los elementos que no coinciden con el id
    }
}
</script>

<template>
    <h1>Task List</h1>

    <input
        v-model="title"
        placeholder="Title"
    />
    <br>
    <!-- Input para añadir una nueva tarea -->
    <input
        v-model="description"
        type="text"
        placeholder="Type description of the task"
    />

    <!-- Botón para añadir la tarea -->
    <button @click="addTask()"> Add Task</button>

    <!-- Lista de tareas -->
    <ul>
        <!-- Iterar sobre la lista de tareas -->
        <li v-for="(task, index) in tasks" :key="index">
            <input type="text" v-model="tasks[index].title">
            <input type="text" v-model="tasks[index].description">
            <h1 placeholder="Title"></h1>
            
            <br>

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
        <!-- Lista de tareas eliminadas -->
        <h2>Deleted Tasks</h2>
        <li v-for="(task, index) in deletedTasks"
            :key="index">
            {{ task.title }}
        </li>
    </ul>
</template>