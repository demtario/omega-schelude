<template>
  <div id="app">
    <Header />

    <v-touch
      @swiperight="goBack()"
      @swipeleft="goFurther()"
      :swipe-options="{direction: 'horizontal'}"
      class="content"
    >
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-touch>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  },
  methods: {
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    },
    goFurther() {
      this.$router.go(1);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_vars.scss";

:root {
  --primary: #{$primary};
  --secondary: #{$secondary};
}

body {
  margin: 0;
  overflow: hidden;
  background-color: var(--secondary);
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

.content {
  overflow: hidden;
  overflow-y: visible;
  display: block;
  height: calc(100vh - 80px);
}

::-webkit-scrollbar {
    width: 4px;
}
::-webkit-scrollbar-track {
    background: var(--secondary); 
}
::-webkit-scrollbar-thumb {
    background: rgba($primary, 0.8); 
    border-radius: 2px;
    transition: 0.3s;

    &:hover {
      background: $primary;
    }
}

@media (max-width: 720px) {
  ::-webkit-scrollbar {
    width: 0px;
  }
}

.btn {
  display: block;
  color: #fff;
  background: linear-gradient(to bottom right, $primary * 0.8, $primary);
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
