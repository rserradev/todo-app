// TODO: Componente para renderizar todos los elementos de la lista de tareas
<template>
    <div id="todo-list-container">
        <TodoItem
            id="task-card"
            v-for="(task, id) in pendingTasks"
            :key="id"
            :task="task"
        />
    </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks'; // Importamos la store de tareas
import { storeToRefs } from 'pinia'; // Importamos la función storeToRefs de Pinia
import TodoItem from './TodoItem.vue';

// Instancia de la store
const tasksStore = useTasksStore();

// Acceso al state (propiedades - variables)
const { pendingTasks } = storeToRefs(tasksStore);


</script>

<style scoped>

</style>