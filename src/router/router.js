import { createRouter, createWebHashHistory } from 'vue-router';

// Importar los componentes
import NewTask from '@/components/NewTask.vue';
import Trash from '@/components/Trash.vue';
import Settings from '@/components/Settings.vue';
import TodosView from '@/views/TodosView.vue';

const routes = [
  { path: '/', name: 'Home', component: TodosView },
  { path: '/NewTask', name: 'NewTask', component: NewTask },
  { path: '/Trash', name: 'Trash', component: Trash },
  { path: '/Settings', name: 'Settings', component: Settings }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;