<template>
  <NavbarMenu/>
  <div class="layout">
    <!-- TODO: MIGRAR Y ELIMINAR EL SIDEBAR MENU -->
    <nav class="sidebar">  
    <SidebarMenu />
    <Sidebar/>
    </nav>

    
    <!-- Contenedor para las vistas dinámicas -->
    <div class="content">
      <RouterView/> <!-- Renderiza las vistas dinámicas aquí -->
    </div>
  </div>
</template>

<script setup>
import SidebarMenu from './components/SidebarMenu.vue'
import NavbarMenu from './components/NavbarMenu.vue';
import Sidebar from './components/layout/Sidebar.vue';

</script>

<style scoped>
.layout {
  display: flex; /* Activamos flexbox para organizar los hijos en fila (horizontal) */
  width: 100%; /* Ocupamos todo el ancho de la pantalla */
  height: 100vh; /* Ocupamos todo el alto de la pantalla */
}

.sidebar {
  width: 200px; /* El sidebar ocupa el 20% del ancho de la pantalla */
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
