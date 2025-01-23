<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import NewTask from './components/NewTask.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import NavbarMenu from './components/NavbarMenu.vue';
</script>

<template>
  <!-- Layout de la aplicación -->
  <NavbarMenu/>
  <div class="layout">
    <!-- Sidebar con el menú -->
    <div class="sidebar">
      <SidebarMenu />
    </div>
    
    <!-- Contenedor para las vistas dinámicas -->
    <div class="content">
      <RouterView/> <!-- Renderiza las vistas dinámicas aquí -->
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex; /* Activamos flexbox para organizar los hijos en fila (horizontal) */
  width: 100%; /* Ocupamos todo el ancho de la pantalla */
  height: 100vh; /* Ocupamos todo el alto de la pantalla */
  background-color: #4797FF;
}

.sidebar {
  width: 200px; /* El sidebar ocupa el 20% del ancho de la pantalla */
  background-color: #FEFEFE;
  height: 100%;
}

.new-task-container {
  display: flex; /* Activamos flexbox para organizar los hijos en columna (vertical) */
  flex: 1; /* El contenido ocupa todo el espacio restante */
  justify-content: center; /* Centramos los hijos horizontalmente */
  background-color: green;
}

.content {
  width: 100%; /* El contenido ocupa todo el ancho de la pantalla */
  height: 100%;
}

</style>
