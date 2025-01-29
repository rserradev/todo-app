// TODO: Componente para crear una tarea
<template>
    <h1>Formulario de creación de tarea</h1>
    <div class="todo-form-container">
        <h1>Lista de tareas</h1>
        <div id="input-task-container">
            <input v-model="title" placeholder="Nombre de la tarea" />
            <textarea v-model="description" placeholder="Descripción de la tarea"></textarea>
            <button @click="addTask">Agregar Tarea</button>
        </div>
    </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

// Instanciamos la store
const tasksStore = useTasksStore();

// Acceso al estado (propiedades - variables)
const { title, description } = storeToRefs(tasksStore);

// Acceso a las acciones (metodos - funciones)
const addTask = tasksStore.addTask;


</script>

<style scoped>
.todo-form-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    padding-left: 20px;
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
</style>