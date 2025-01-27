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
            priority: 'medium'
        }
    ]);

    const deletedTasks = ref([
        {
            id: 2,
            title: 'Example deleted Task',
            description: 'This is an example deleted task.',
            completed: false,
            priority: 'medium'
        }
    ]);

    const title = ref('');
    const description = ref('');
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
            priority: 'medium'
        })
        title.value = '';
        description.value = '';
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

    console.log()

    return {
        title,
        description,
        pendingTasks,
        deletedTasks,
        addTask,
        deleteTask
    }
});