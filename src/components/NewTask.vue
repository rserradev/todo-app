<script setup>
import { ref } from 'vue';
import { computed } from 'vue';

// Variables
const title = ref(''); // Titulo de la tarea
const description = ref(''); // Nueva Tarea
const tasksList = ref([]); // Lista de Tareas
const deletedTasks = ref([]); // Lista de tareas eliminadas
const filter = ref('false'); // Filtro de tareas

// Funcion para añadir una nueva tarea como un objeto en la lista de tareas
const addTask = () => {
    if (title.value === '' || description.value === '') return;

    tasksList.value.push({
        id: Date.now(),
        title: title.value,
        description: description.value,
        completed: false,
        priority: 'medium'
    });

    title.value = '';
    description.value = '';
    console.log(tasksList.value);
}

// Logica para completar una tarea
const completeTask = (id) => {
    const task = tasksList.value.find(task => task.id === id);
    task.completed = !task.completed;
}

// Logica para modificar una tarea
const modifyTask = (id) => {
    const task = tasksList.value.find(task => task.id === id);
}

// Funcion para eliminar una tarea
const deleteTask = (id) => {
    if (window.confirm('Esta seguro que quiere eliminar la tarea?') === true) {
        const task = tasksList.value.find(task => task.id === id); // Busca la tarea por el id
        deletedTasks.value.push(task); // Añade la tarea eliminada al array de tareas eliminadas
        tasksList.value = tasksList.value.filter(task => task.id !== id); // Filtra el array y devuelve el resto de los elementos que no coinciden con el id
    }
}

// Funcion para filtrar las tareas
const filteredTasks = computed(() => {
    if (filter.value === 'all') {
        return tasksList.value;
    } else if (filter.value === 'true') {
        return tasksList.value.filter(task => task.completed);
    } else if (filter.value === 'false') {
        return tasksList.value.filter(task => !task.completed);
    }
});

</script>

<template>
    <div id="create-task-container">
        <h1>Task List</h1>

        <input v-model="title" placeholder="Title" />
        <br>
        
        <!-- Input para añadir una nueva tarea -->
        <input v-model="description" type="text" placeholder="Type description of the task" />
        
        <!-- Botón para añadir la tarea -->
        <button @click="addTask()"> Add Task</button>
        
        <select v-model="filter" name="filter" id="filter" placeholder="Filter" required>
            <option value="true">
                Completed
            </option>
            <option value="false">
                Uncompleted
            </option>
            <option value="all">
                All
            </option>
        </select>

        <!-- Lista de tareas -->
            <!-- Iterar sobre la lista de tareas -->
            <div v-for="(task, index) in filteredTasks" :key="index">
                <input type="checkbox" v-model="tasksList[index].completed">
                <input type="text" v-model="tasksList[index].title">
                <input type="text" v-model="tasksList[index].description">
                <label for=""> Prioridad: {{ task.priority }}</label>
                <h1 placeholder="Title"></h1>
                <button @click="completeTask(task.id)">
                    Complete
                </button>

                <button @click="modifyTask(task.id)">
                    Modify
                </button>

                <button @click="deleteTask(task.id)">
                    Delete
                </button>
            </div>
            
            <!-- Lista de tareas eliminadas -->
            <h2>Deleted Tasks</h2>
            <li v-for="(task, index) in deletedTasks" :key="index">
                {{ task.title }}
            </li>
    </div>
</template>

<style scoped>
button {
    background-color: skyblue;
}
</style>