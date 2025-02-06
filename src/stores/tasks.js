import { defineStore } from 'pinia';
import { ref } from 'vue';
import { computed } from 'vue';

export const useTasksStore = defineStore('taskStore', () => {
    
    // Estado reactivo
    const pendingTasks = ref([
        {
            id: 1,
            title: 'Example pending Task',
            description: 'This is an example pending task.',
            completed: false,
            priority: 'high',
            createdAt: '2023-03-01 10:00:00'
        }, 
        {
            id: 2,
            title: 'Example pending Task',
            description: 'This is an example pending task.',
            completed: false,
            priority: 'medium',
            createdAt: '2023-03-02 10:00:00'
        },
        {
            id: 3,
            title: 'Example pending Task',
            description: 'This is an example pending task.',
            completed: false,
            priority: 'low',
            createdAt: '2023-03-03 10:00:00'
        }
    ]);

    const completedTasks = ref([
        {
            id: 4,
            title: 'Example completed Task',
            description: 'This is an example completed task.',
            completed: true,
            priority: 'high',
            createdAt: '2023-03-04 10:00:00'
        }
    ]);

    const deletedTasks = ref([
        {
            id: 5,
            title: 'Example deleted Task',
            description: 'This is an example deleted task.',
            completed: false,
            priority: 'medium',
            createdAt: '2023-03-05 10:00:00'
        }
    ]);

    const title = ref('');
    const description = ref('');
    const priority = ref('');

    const isEditing = ref(false);

    const sortBy = ref('createdAt');
    const sortDirection = ref('asc');
    
    // Métodos
    const addTask = () => {
        if (title.value === '' || description.value === '') {
            alert('Tiene campos vacios');
            return;
        }

        // La fecha debe quedar dentro de la funcion para que se actualice en cada ejecución
        const fechaHora = new Date();
        const fecha = fechaHora.toLocaleDateString();
        const hora = fechaHora.toLocaleTimeString();

        if (priority.value === '') {
            priority.value = 'medium';
        }
        
        pendingTasks.value.push({
            id: Date.now(),
            title: title.value,
            description: description.value,
            completed: false,
            priority: priority.value,
            createdAt: fecha + ' ' + hora,
        })
        title.value = '';
        description.value = '';
        priority.value = '';
        console.log('Tareas pendientes:', pendingTasks.value);
    };

    const openEditModal = (taskId) => {
        console.log('Abriendo modal de edición de tarea con ID:', taskId);
        isEditing.value = true;
        console.log('Editando tarea con ID:', taskId);
    }

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
    }

    const filterTasksByPriority = (priority) => {
        console.log('Filtrando tareas por prioridad:', priority);
    }

    const setSortBy = (value) => {
        sortBy.value = value;
        console.log('Orden:', sortBy.value);
    };

    const setSortDirection = (value) => {
        sortDirection.value = value;
        console.log('Orden:', sortDirection.value);
    };

    const setPriority = (value) => {
        priority.value = value;
        console.log('Prioridad:', priority.value);
    }
 
    const priorities = {
        low: 1,
        medium: 2,
        high: 3
    }

    // Propiedades computadas
    const sortedTasks = computed(() => {
        return [...pendingTasks.value].sort((a, b) => {
            let comparison = 0;

            switch (sortBy.value) {
                case 'priority':    
                    const aPriority = priorities[a.priority];
                    const bPriority = priorities[b.priority]
                    comparison = aPriority - bPriority;
                    console.log(aPriority - bPriority);
                    break;
                case 'createdAt':
                    const aDate = new Date(a.createdAt);
                    const bDate = new Date(b.createdAt);
                    comparison = aDate - bDate; // Ordena de mayor a menor
                    break;
                case 'name':
                    const aTitle = a.title.toLowerCase();
                    const bTitle = b.title.toLowerCase();
                    comparison = aTitle.localeCompare(bTitle);
                    break;
                default:
                    break;
            }
            return sortDirection.value === 'asc' ? comparison : -comparison;
        });
    });

    return {
        title,
        description,
        priority,
        pendingTasks,
        deletedTasks,
        completedTasks,
        sortBy,
        sortedTasks,
        sortDirection,
        isEditing,
        addTask,
        openEditModal,
        deleteTask,
        completeTask,
        setSortBy,
        setSortDirection,
        setPriority
    }
});