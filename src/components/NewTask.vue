<!-- TEMPLATE -->
<template>
    <div id="sort-by-container">
        <label for="">Ordenar por:</label>
        <select name="" id="sort-by" v-model="sortCriteria">
            <option value="priority">Prioridad</option>
            <option value="createdAt">Fecha de creación</option>
            <option value="expiredAt">Fecha de vencimiento</option>
            <option value="title">Título</option>
        </select>

        <!-- <select v-model="sortOrder">
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select> -->
    </div>

    <div id="create-task-container">
        <h1>Lista de tareas</h1>
        <div id="input-task-container">
            <input v-model="title" placeholder="Nombre de la tarea" />
            <textarea v-model="description" placeholder="Descripción de la tarea"></textarea>
            <button @click="addTask">Agregar Tarea</button>
        </div>
    </div>

    <div id="task-card-container">
        <div v-for="(task, id) in sortedTasks" :key="id" id="task-card">
            {{ task.id }} - {{ task.completed }} - {{ task.priority }}

            <div>
                <input type="checkbox">
                <h2 placeholder="Title" :class="{ completed: task.completed, pending: !task.completed }"
                    @click="toggleTask(task.id)"> {{ task.title }}</h2>
            </div>

            <p>{{ task.description }}</p>
            <label for=""> Prioridad: {{ task.priority }}</label>
            <label for=""> Fecha de creación: {{ task.createdAt }}</label>

            <div id="task-card-buttons">
                <BaseButton style="background-color: skyblue" @click="completeTask(task.id)">
                    Complete
                </BaseButton>

                <button @click="modifyTask(task.id)">
                    Modify
                </button>

                <BaseButton style="background-color: #FF0000" @click="deleteTask(task.id)">Delete</BaseButton>
            </div>
        </div>
    </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';
import BaseButton from './ui/BaseButton.vue';
import TodoItem from './tasks/TodoItem.vue';

// Instancia de la store
const tasksStore = useTasksStore();

// Acceso al state (propiedades - variables)
const { title, description, pendingTasks } = storeToRefs(tasksStore);
const sortCriteria = ref('createdAt');

// Acceso a las actions (metodos - funciones)
const addTask = tasksStore.addTask;
const deleteTask = tasksStore.deleteTask;
const completeTask = tasksStore.completeTask;

const priorities = {
    low: 1,
    medium: 2,
    high: 3
}

const sortedTasks = computed(() => {
    return [...pendingTasks.value].sort((a, b) => {
        switch (sortCriteria.value) {
            case 'priority':
                const aPriority = priorities[a.priority];
                const bPriority = priorities[b.priority];
                console.log(bPriority, aPriority);
                return aPriority - bPriority;
        }
    });
});

console.log(sortedTasks.value);
</script>

<!-- ESTILOS PARA EL COMPONENTE -->
<style scoped>
#sort-by-container {
    display: flex;
    flex-direction: row;
    padding: auto;
    margin: auto;
}

.completed {
    text-decoration: line-through;
}

.pending {
    text-decoration: none;
}

button {
    margin: auto;
}

textarea {
    border: none;
    resize: none;
    width: 100%;
    min-height: 40px;
    overflow: hidden;
}

#create-task-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    padding-left: 20px;
}

h1 {
    text-align: start;
    padding-left: 10px
}

h2 {
    text-align: start;
    padding-left: 10px;
    margin: 5px;
}

p {
    text-align: start;
    padding-left: 10px;
    margin: 5px;
}

input {
    width: 50%;
    border: none;
}

#input-task-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: start;

    /* Ocupamos todo el espacio disponible */
    row-gap: 5px;
    /* Espacio entre filas */
    padding: 10px;
    /* Espacio entre contenido y borde */

    /* Bordes */
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    border-color: #E6E6E6;
}

/* TASK CARD */
#task-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#task-card {
    display: grid;
    margin: 5px;

    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #E6E6E6;

    padding: auto;
    background-color: white;
}

#task-card-buttons {
    display: flex;
}

#task-card:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
}
</style>