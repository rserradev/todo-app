// TODO: Componente para renderizar todos los elementos de la lista de tareas
<template>
    <TodoFilters/>
    <div id="todo-list-container">
        <TodoItem
            id="task-card"
            v-for="(task, id) in sortedTasks"
            :key="task.id"
            :task="task"
        />
    </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks'; // Importamos la store de tareas
import { storeToRefs } from 'pinia'; // Importamos la función storeToRefs de Pinia
import TodoItem from './TodoItem.vue';
import TodoFilters from './TodoFilters.vue';

// Instancia de la store
const tasksStore = useTasksStore();

// Acceso al state (propiedades - variables)
const { pendingTasks, sortedTasks } = storeToRefs(tasksStore);


</script>

<style scoped>

</style>