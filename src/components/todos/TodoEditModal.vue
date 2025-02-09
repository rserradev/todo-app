<template>
    <Transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 scale-95">
        <div v-if="isEditing === true" class="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 ">
            <h1 class="text-blue-500 bg-black text-2xl font-bold mb-4">Modal de edición de tarea</h1>
            <!-- Contenido del modal -->
            <div class="bg-white rounded-lg m-5 p-5">
                <h1 class="text-2xl font-bold mb-4">Editar tarea</h1>

                <!-- input para editar el título -->
                <input v-model="todoToEdit.title" class="w-full p-2 mb-4 border-2 border-gray-400 rounded-lg"
                    type="text">

                <!-- input para editar la descripción -->
                <textarea v-model="todoToEdit.description" class="w-full p-2 mb-4 border-2 border-gray-400 rounded-lg"
                    type="">
                    </textarea>

                <!-- Boton para guardar la edición -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                    type="button">Guardar</button>

                <!-- Boton para cerrar el modal -->
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl" type="button"
                    @click="isEditing = false">
                    Cancelar
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

// Instancia de la store
const tasksStore = useTasksStore();

// Acceso al estado (propiedades - variables)
const { isEditing, todoToEdit } = storeToRefs(tasksStore);

</script>

<style lang="scss" scoped></style>