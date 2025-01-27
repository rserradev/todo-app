<script setup>
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

const tasksStore = useTasksStore();
const { title, description, deletedTasks} = storeToRefs(tasksStore);

</script>

<template>
    <li v-for="(task, index) in deletedTasks" :key="index">
        {{ task.title }}
        {{ task.description }}
    </li>
    
</template>

<style scoped>

</style>