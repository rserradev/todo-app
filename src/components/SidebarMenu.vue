<script setup></script>

<template>
  <div class="sidebar-menu-container">
    <h1>Menu</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Trash">Trash</RouterLink>
    <RouterLink to="/Settings">Settings</RouterLink>
  </div>
</template>

<style scoped>
.sidebar-menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  height: 100%;
  padding-top: 20px;
}
</style>
