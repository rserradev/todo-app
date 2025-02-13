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
                type="">sasdasdasd</textarea>
                
                <!-- Combobox de Prioridad -->
                <select v-model="todoToEdit.priority" name="" id="" class="border-2 border-gray-400 rounded-lg p-2">
                    <option value="" selected disabled>Prioridad</option>
                    <option value="low">Baja</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                </select>

                <div class="flex justify-between gap-5">
                    <!-- Boton para guardar la edición -->
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                        type="button"
                        v-on:click="saveEditedTodo(todoToEdit.id)"
                        >Guardar</button>

                    <!-- Boton para cerrar el modal -->
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl" type="button"
                        @click="isEditing = false">
                        Cancelar
                    </button>
                </div>
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
const saveEditedTodo = tasksStore.saveEditedTodo;

</script>

<style lang="scss" scoped></style>