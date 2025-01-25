<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

// Instancia de la store
const tasksStore = useTasksStore();

// Acceso al state (propiedades - variables)
const { title, description, pendingTasks } = storeToRefs(tasksStore);

console.log(title, description);
// Acceso a las actions (metodos - funciones)
const addTask = tasksStore.addTask;

</script>

<template>
    <div id="create-task-container">

        <div id="input-task-container">
            <h1>Task List</h1>

            <!-- Campo de entrada para el título -->
            <input v-model="title" placeholder="Título de la tarea" />

            <!-- Campo de entrada para la descripción -->
            <textarea v-model="description" placeholder="Descripción de la tarea"></textarea>

            <!-- Botón para agregar tarea -->
            <button @click="addTask">Agregar Tarea</button>
        </div>
        
        {{ pendingTasks }}

        <!-- <select v-model="filter" name="filter" id="filter" placeholder="Filter" required>
            <option value="true">
                Completed
            </option>
            <option value="false">
                Uncompleted
            </option>
            <option value="all">
                All
            </option>
        </select> -->

        <div id="task-list-container">
            <div v-for="(task, index) in pendingTasks" :key="index" id="task-card">
                <h2 placeholder="Title"> {{ task.title }}</h2>
                <input type="text"> {{ task.description }}
                <input type="checkbox" > {{ task.completed }}
                <label for=""> Prioridad: {{ task.priority }}</label>

                <button @click="completeTask(task.id)">
                    Complete
                </button>

                <button @click="modifyTask(task.id)">
                    Modify
                </button>

                <button @click="deleteTask(task.id)">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    background-color: skyblue;
    margin: auto;
}

#create-task-container {
    width: 100%;
    background-color: #4797FF;
}

h1 {
    text-align: center;
    text-wrap: auto;
}

input {
    width: 50%;
}

#input-task-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px auto ;
    align-items: center;

    /* Ocupamos todo el espacio disponible */
    row-gap: 5px;
    /* Espacio entre filas */
    padding: 10px;
    /* Espacio entre contenido y borde */
    background-color: white;

    box-sizing: border-box;

    /* Bordes */
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    border-color: white;
}

#task-card {
    display: grid;
    margin: 5px;
    border-radius: 10px;
    border-width: 1px;
    border-color: gray;
    padding: 10px;
    background-color: white;
}

#task-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>