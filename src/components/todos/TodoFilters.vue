// TODO: Componente para filtrar tareas por estado
<template>
    <div class="flex flex-row gap-5">
        <label for="sortBy">Sort priority by:</label>
        <select
            v-model="sortBy"
            @change="setSortBy(sortBy)"
            class="border rounded-lg border-gray-300 p-1"
            name="" id="" >
            <option value="priority">Prioridad</option>
            <option value="createdAt">Fecha de creación</option>
            <option value="name">Nombre</option>
            <option value="expiredAt">Fecha de vencimiento</option>
        </select>

        <label for="">Sort order:</label>
        <select name="" id=""
            v-model="sortDirection"
            @change="setSortDirection(sortDirection)"
        >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>
    </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';

const tasksStore = useTasksStore();

const { sortBy, setSortBy, setSortDirection } = tasksStore;

console.log(sortBy);

</script>

<style scoped>

</style>