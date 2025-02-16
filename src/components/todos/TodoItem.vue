<template>
    <div id="todo-item-container" class="flex flex-col m-5">
        <div id="todo-item" class="flex flex-col border border-gray-500 rounded-lg ">
            
            <div class="flex justify-between border-b p-2 gap-2">
                <p>ID: {{ task.id }} | Prioridad: {{ task.priority }}</p>
                <label>Fecha de creación: {{ task.createdAt }}</label>
                <label for="">Fecha de vencimiento: pendiente por hacer</label>
            </div>

            <div class="flex">
                <div id="todo-item-title" class="flex m-2">
                    <input :checked="task.completed" @change="completeTask(task.id)" type="radio"
                        class="mr-2 h-5 w-5" />

                    </div>
                    <div>
                        
                    <h1 :class="{ completed: task.completed, pending: !task.completed }">
                        {{ task.title }}
                    </h1>
                    <p class="text-sm">{{ task.description }}</p>
                </div>
            </div>


            <div class="flex justify-between border-t p-2 gap-2 ">
                <button class="bg-green-500 text-white px-3 py-1 rounded-lg" @click="openEditModal(task.id)">
                    Editar
                </button>

                <button class="bg-red-500 text-white px-3 py-1 rounded-lg" @click="deleteTask(task.id)">
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

<style scoped></style>
