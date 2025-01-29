// TODO: Vista para mostrar todos los elementos de la lista de tareas
<template>
    <h1>Esta es la vista de tareas</h1>
    <div>
        <TodoForm/>
    </div>

    <div>
        <TodoList/>
    </div>
</template>

<script setup>
import TodoForm from '@/components/todos/TodoForm.vue';
import TodoList from '@/components/todos/TodoList.vue';

</script>

<style lang="scss" scoped>

</style>