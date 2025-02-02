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
    </div>

    <div id="task-card-container">
       
    </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia'; // Importamos la función storeToRefs de Pinia
import BaseButton from './ui/BaseButton.vue';

// Instancia de la store
const tasksStore = useTasksStore();

// Acceso al state (propiedades - variables)
const { title, description, pendingTasks } = storeToRefs(tasksStore);
const sortCriteria = ref('createdAt');

// Acceso a las actions (metodos - funciones)
const addTask = tasksStore.addTask;
const deleteTask = tasksStore.deleteTask;
const completeTask = tasksStore.completeTask;



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

#task-card-buttons {
    display: flex;
}

#task-card:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
}
</style>