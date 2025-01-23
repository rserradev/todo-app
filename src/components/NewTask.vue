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

        <div id="input-task-container">
            <h1>Task List</h1>

            <!-- Input task title -->
            <input v-model="title" placeholder="Title" />

            <!-- Input task description -->
            <input v-model="description" type="text" placeholder="Type description of the task" />

            <!-- Button to add a new task -->
            <button @click="addTask()"> Add Task</button>
        </div>

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

        <div id="task-list-container">
            <div v-for="(task, index) in filteredTasks" :key="index" id="task-card">
                <h2 placeholder="Title"> {{ task.title }}</h2>
                <input type="checkbox" v-model="tasksList[index].completed">
                <input type="text" v-model="tasksList[index].title">
                <input type="text" v-model="tasksList[index].description">
                <label for=""> Prioridad: {{ task.priority }}</label>

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
        </div>
    </div>

    <!-- Lista de tareas eliminadas
    <h2>Deleted Tasks</h2>
    <li v-for="(task, index) in deletedTasks" :key="index">
        {{ task.title }}
    </li> -->
</template>

<style scoped>
button {
    background-color: skyblue;
    margin: auto;
}

#create-task-container {
    width: 100%;
    background-color: #4797FF;
}

h1 {
    text-align: center;
    text-wrap: auto;
}

input {
    width: 50%;
}

#input-task-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px auto ;
    align-items: center;

    /* Ocupamos todo el espacio disponible */
    row-gap: 5px;
    /* Espacio entre filas */
    padding: 10px;
    /* Espacio entre contenido y borde */
    background-color: white;

    box-sizing: border-box;

    /* Bordes */
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    border-color: white;
}

#task-card {
    display: grid;
    margin: 5px;
    border-radius: 10px;
    border-width: 1px;
    border-color: gray;
    padding: 10px;
    background-color: white;
}

#task-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>