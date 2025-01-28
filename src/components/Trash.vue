<script setup>
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';
import TodoItem from './tasks/TodoItem.vue';

const tasksStore = useTasksStore();
const { title, description, deletedTasks} = storeToRefs(tasksStore);

</script>

<template>
    <li v-for="(task, index) in deletedTasks" :key="index">
        {{ task.title }}
        {{ task.description }}
    </li>
    <todo-item>todo items</todo-item>
</template>

<style scoped>

</style>