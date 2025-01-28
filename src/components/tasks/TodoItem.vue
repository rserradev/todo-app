<script setup>
import { ref } from 'vue';

const todoItem = ref([
    {
        id: 1,
        title: 'Task 1',
        completed: false,
    },
    {
        id: 2,
        title: 'Task 2',
        completed: false,
    },
    {
        id: 3,
        title: 'Task 3',
        completed: false,
    },
]);

const toggleTask = (id) => {
    const task = todoItem.value.find((task) => task.id === id);
    task.completed = !task.completed;
    console.log(task);
}

</script>

<template>
    <li
        v-for="(task, index) in todoItem" :key="index"
        class="todo-item"
        :class="{ completed: task.completed, pending: !task.completed }"
    >
        <input type="checkbox" @click="toggleTask(task.id)">
        {{ index }}
        {{ task.id }}
        {{ task.title }}
        {{ task.completed }}
    </li>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
}

.pending {
    text-decoration: none;
}

</style>