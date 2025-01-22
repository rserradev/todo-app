import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

// Importar los componentes
import NewTask from './components/NewTask.vue';
import Trash from './components/Trash.vue';

const routes = [
  { path: '/', name: 'Home', component: NewTask },
  { path: '/Trash', name: 'Trash', component: Trash },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;