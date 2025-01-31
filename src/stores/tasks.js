import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTasksStore = defineStore('taskStore', () => {
    
    // Estado reactivo
    const pendingTasks = ref([
        {
            id: 1,
            title: 'Example pending Task',
            description: 'This is an example pending task.',
            completed: false,
            priority: 'high'
        }, 
        {
            id: 2,
            title: 'Example pending Task',
            description: 'This is an example pending task.',
            completed: false,
            priority: 'medium'
        },
        {
            id: 3,
            title: 'Example pending Task',
            description: 'This is an example pending task.',
            completed: false,
            priority: 'low'
        }
    ]);

    const completedTasks = ref([
        {
            id: 4,
            title: 'Example completed Task',
            description: 'This is an example completed task.',
            completed: true,
            priority: 'high'
        }
    ]);

    const deletedTasks = ref([
        {
            id: 5,
            title: 'Example deleted Task',
            description: 'This is an example deleted task.',
            completed: false,
            priority: 'medium'
        }
    ]);

    const title = ref('');
    const description = ref('');

    const fechaHora = new Date();
    const fecha = fechaHora.toLocaleDateString();
    const hora = fechaHora.toLocaleTimeString();

    // Métodos
    const addTask = () => {
        if (title.value === '' || description.value === '') {
            alert('Tiene campos vacios');
            return;
        }

        pendingTasks.value.push({
            id: Date.now(),
            title: title.value,
            description: description.value,
            completed: false,
            priority: 'medium',
            createdAt: fecha + ' ' + hora,
        })
        title.value = '';
        description.value = '';
        console.log('Tareas pendientes:', pendingTasks.value);
    };

    const deleteTask = (taskId) => {
        console.log('Eliminando tarea con ID:', taskId);
        if (window.confirm('Esta seguro que quiere eliminar la tarea?') === true) {
            const task = pendingTasks.value.find(task => task.id === taskId); // Busca la tarea por el id
            console.log('Tarea encontrada:', task);
            deletedTasks.value.push(task); // Añade la tarea eliminada al array de tareas eliminadas
            pendingTasks.value = pendingTasks.value.filter(task => task.id !== taskId); // Filtra el array y devuelve el resto de los elementos que no coinciden con el id
            console.log('Tarea eliminada:', task);
            console.log('Tareas eliminadas:', deletedTasks.value);
            console.log('Tareas pendientes:', pendingTasks.value);   
        }
    }

    const completeTask = (taskId) => {
        const task = pendingTasks.value.find(task => task.id === taskId);
        console.log('Tarea encontrada:', task);
        if (task.completed === true) {
            alert('La tarea ya fue completada');
            console.log('La tarea ya fue completada');
            return;
        }

        // Insertamos la tarea en el array de tareas completadas
        completedTasks.value.push(task);

        // Eliminamos la tarea del array de tareas pendientes
        pendingTasks.value = pendingTasks.value.filter(task => task.id !== taskId);
        console.log('Tarea eliminada:', task);
        console.log('Tarea completada:', task);
        console.log('Tareas completadas:', completedTasks.value);
        console.log('Tareas pendientes:', pendingTasks.value);

    }

    return {
        title,
        description,
        pendingTasks,
        deletedTasks,
        addTask,
        deleteTask,
        completeTask
    }
});