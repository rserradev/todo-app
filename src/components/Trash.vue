<script setup>
import { useTasksStore } from '@/stores/tasks';

const tasksStore = useTasksStore();
const deletedTasks = tasksStore.deletedTasks;
console.log(deletedTasks)
</script>

<template>
    <li v-for="deletedTask in deletedTasks">
        {{ deletedTask }}
    </li>
</template>

<style scoped>

</style>