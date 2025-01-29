import './assets/main.css'

import { createApp } from 'vue'; // Importamos la función createApp de Vue
import App from './App.vue'; // Importamos la aplicación
import router from './router/router'; // Importamos el router
import { createPinia } from 'pinia';

const pinia = createPinia(); // Creamos la aplicación con Pinia activado para el estado global
const app = createApp(App); // Creamos la aplicación

app.use(pinia); // Aplicamos Pinia a la aplicación
app.use(router); // Aplicamos el router a la aplicación
app.mount('#app'); // Montamos la aplicación en el elemento con el id 'app'