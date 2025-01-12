<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import NewTask from './components/NewTask.vue'
import SidebarMenu from './components/SidebarMenu.vue'
</script>

<template>
  <div class="layout">
    <div class="sidebar">
      <SidebarMenu />
    </div>
    
    <div class="new-task-container">
      <NewTask/>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex; /* Activamos flexbox para organizar los hijos en fila (horizontal) */
  width: 100%; /* Ocupamos todo el ancho de la pantalla */
  height: 100vh; /* Ocupamos todo el alto de la pantalla */
  background-color: red;
}

.sidebar {
  width: 200px; /* El sidebar ocupa el 20% del ancho de la pantalla */
  background-color: blue;
  height: 100%;
}

.new-task-container {
  display: flex; /* Activamos flexbox para organizar los hijos en columna (vertical) */
  flex: 1; /* El contenido ocupa todo el espacio restante */
  justify-content: center; /* Centramos los hijos horizontalmente */
  background-color: green;
}
</style>
