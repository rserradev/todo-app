// TODO: Componente para crear una tarea
<template>
    <div class="px-80 border-black">
        <h1 class="text-2xl font-bold text-start py-5">Lista de tareas</h1>
        <div class="flex flex-col gap-1 border border-gray rounded-lg">
            <input
                type="text"
                class="m-1"
                v-model="title"
                placeholder="Nombre de la tarea"
            />
            <textarea
                typeof="textarea"
                class="m-1"
                v-model="description"
                placeholder="Descripción">
            </textarea>
            <div class="flex justify-between border-t p-2">
                <input
                    type="datetime-local"
                    class="bg-blue-500 text-white p-2 rounded-lg"
                >
                <!-- Selector de prioridad para la tarea -->
                <select
                    v-model="priority"
                    @change="setPriority(priority)"
                    placeholder="Prioridad"
                    class="bg-blue-500 text-white p-2 rounded-lg"
                >
                    <option value="" selected disabled>Prioridad</option>
                    <option value="low">Baja</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                </select>
                <!-- Selector de tags para la tarea -->
                <select
                    v-model="tag"
                    @change="setTag(tag)"
                    placeholder="Tag"
                    class="bg-blue-500 text-white p-2 rounded-lg"
                >
                    <option value="" selected disabled>Tag</option>
                    <option value="work">Trabajo</option>
                    <option value="personal">Personal</option>
                    <option value="shopping">Compras</option>
                    <option value="health">Salud</option>
                    <option value="study">Estudio</option>
                </select>
                <!-- Botón para añadir la tarea -->
                <button
                    type="button"
                    class="bg-blue-500 text-white p-2 rounded-lg "
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
const { title, description, priority } = storeToRefs(tasksStore);

// Acceso a las acciones (metodos - funciones)
const addTask = tasksStore.addTask;
const setPriority = tasksStore.setPriority;


</script>

<style scoped>
    
</style>