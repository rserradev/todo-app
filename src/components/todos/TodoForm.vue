// TODO: Componente para crear una tarea
<template>
    <div class="px-80 border-black">
        <h1 class="text-2xl font-bold text-start py-5">Lista de tareas</h1>
        <div class="flex flex-col gap-1 border border-gray rounded-lg">
            <input
                class="m-1"
                v-model="title"
                placeholder="Nombre de la tarea"
            />
            <textarea
                class="m-1"
                v-model="description"
                placeholder="Descripción">
            </textarea>
            <div class="flex justify-end border-t p-2">
                <button
                    class="bg-blue-500 text-white p-2 rounded-lg"
                    @click="addTask">
                    Añadir tarea
                </button>   
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

// Instanciamos la store
const tasksStore = useTasksStore();

// Acceso al estado (propiedades - variables)
const { title, description } = storeToRefs(tasksStore);

// Acceso a las acciones (metodos - funciones)
const addTask = tasksStore.addTask;


</script>

<style scoped>
    
</style>