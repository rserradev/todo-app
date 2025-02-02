<template>
    <div id="todo-item-container">
        <div id="todo-item">
            <p>ID: {{ task.id }} | Prioridad: {{ task.priority }}</p>
            
            <div id="todo-item-title">
                <input
                    :checked="task.completed"
                    @change="completeTask(task.id)"
                    type="checkbox"
                />

                <h2 
                    :class="{ completed: task.completed, pending: !task.completed }">
                    {{ task.title }}
                </h2>
            </div>
            
            <p>{{ task.description }}</p>
            <label>Fecha de creación: {{ task.createdAt }}</label>
            
            <div id="todo-item-actions">    
                <button
                    @click="deleteTask(task.id)">
                        Delete
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';

// 📌 Recibir `task` como `prop`
defineProps({
    task: Object
});

// 📌 Instancia de la store
const tasksStore = useTasksStore();

// 📌 Acceder a las acciones de la store
const completeTask = tasksStore.completeTask;
const deleteTask = tasksStore.deleteTask;

</script>

<style scoped>
.completed {
    text-decoration: line-through;
    opacity: 0.6;
}

.todo-item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#todo-item {
    display: grid;
    margin: 5px;

    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #E6E6E6;

    padding: auto;
    background-color: white;
}

#todo-item-title {
    display: flex;
}


</style>
