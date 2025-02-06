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
            <label for="">Fecha de vencimiento: pendiente por hacer</label>
            
            <div class="flex justify-between border-t p-2 gap-2 ">
                <button
                    class="bg-green-500 text-white px-3 py-1 rounded-lg"
                    @click="openEditModal(task.id)"
                >
                    Editar
                </button>

                <button
                    class="bg-red-500 text-white px-3 py-1 rounded-lg"
                    @click="deleteTask(task.id)">
                        Delete
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

// 📌 Recibir `task` como `prop`
defineProps({
    task: Object
});

// 📌 Instancia de la store
const tasksStore = useTasksStore();

// 📌 Acceder a las propiedades de la store
const { isEditing } = storeToRefs(tasksStore);

// 📌 Acceder a las acciones de la store
const completeTask = tasksStore.completeTask;
const deleteTask = tasksStore.deleteTask;
const openEditModal = tasksStore.openEditModal;

</script>

<style scoped>


</style>
