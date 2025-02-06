<template>
    <div v-if="isEditing === true" class="fixed bg-gray-100 top-10 keft-0 size-full">
        <h1>Modal de edición de tarea</h1>
    </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

// Instancia de la store
const tasksStore = useTasksStore();

// Acceso al estado (propiedades - variables)
const { isEditing } = storeToRefs(tasksStore);

</script>

<style lang="scss" scoped>

</style>