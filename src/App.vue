<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
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
  background-color: var(--secondary);
}
</style>
