import { createRouter, createWebHashHistory } from 'vue-router';

// Importar los componentes
import Trash from '@/components/Trash.vue';
import Settings from '@/components/Settings.vue';
import TodosView from '@/views/TodosView.vue';
import TodosCompletedView from '@/views/TodosCompletedView.vue';

const routes = [
  { path: '/', name: 'Home', component: TodosView },
  { path: '/Completed', name: 'Completed', component: TodosCompletedView },
  { path: '/Trash', name: 'Trash', component: Trash },
  { path: '/Settings', name: 'Settings', component: Settings }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;