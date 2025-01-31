<template>
  <nav class="sidebar-menu-container">
    <div id="user-info">
      <p>Username</p>
      <p>Logout</p>
    </div>
    
    <div id="menu-items">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Completed">Completed</RouterLink>
      <RouterLink to="/Trash">Trash</RouterLink>
      <RouterLink to="/Settings">Settings</RouterLink>
    </div>
  </nav>
</template>

<script setup>
</script>


<style scoped>
.sidebar-menu-container {
  display: flex;
  flex-direction: column;
  background-color: #EEEEEE;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: start;
}

#user-info {
  display: flex;
  font-size: 15px;
  justify-content: space-between; /* Centramos los hijos horizontalmente */
  box-sizing: border-box; /* Incluimos el padding y el border en el tamaño del contenedor */
  padding: 5px;
}

#menu-items {
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-left: 010px;
}

</style>
