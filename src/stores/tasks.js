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
        }
    ]);
    const deletedTasks = ref([
        {
            id: 2,
            title: 'Example deleted Task',
            description: 'This is an example deleted task.',
            completed: false,
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
        if (window.confirm('Esta seguro que quiere eliminar la tarea?') === true) {
            const task = pendingTasks.value.find(task => task.taskId === taskId); // Busca la tarea por el id
            deletedTasks.value.push(task); // Añade la tarea eliminada al array de tareas eliminadas
            pendingTasks.value = pendingTasks.value.filter(task => task.id !== taskId); // Filtra el array y devuelve el resto de los elementos que no coinciden con el id

        }
    }

    return {
        title,
        description,
        pendingTasks,
        deletedTasks,
        addTask,
        deleteTask
    }
});