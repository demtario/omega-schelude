<template>
  <div id="app">
    <Header />
    
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  overflow-x: hidden;
  background-color: var(--secondary);
}

:root {
  --primary: #eb3f57;
  --secondary: #151424;
}

#app {
  font-family: 'Krub', sans-serif;
  text-align: center;
  min-height: 100vh;
  color: #2c3e50;
  padding-top: 80px;
  padding-bottom: 48px;
  box-sizing: border-box;
}

.btn {
  display: block;
  color: #fff;
  background-color: var(--primary);
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 16px;
}

.fade-enter-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
