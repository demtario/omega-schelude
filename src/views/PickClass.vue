<template>
    <div class="pick">
        <router-link
          class="class"
          v-for="(item, index) in classes"
          :to="'/schelude/'+item"
          :key="index"
        >
            {{ item }}
        </router-link>
        <Replacements :classname="null" />
    </div>
</template>

<script>
import Replacements from '@/components/Replacements.vue';

import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const API = axios.create({
  baseURL: 'https://amedrygal.pl/api/',
  headers: { 'Cache-Control': 'no-cache' },
  // cache will be enabled by default
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

export default {
  name: 'pick-class',
  components: {
    Replacements,
  },
  data() {
    return {
      classes: [],
    };
  },
  mounted() {
    API.get('classes.php')
      .then((res) => {
        // console.table(res.data)
        this.classes = res.data.classes;
      })
      .catch((err) => {
        throw (err);
      });
  },
};
</script>

<style lang="scss" scoped>
    @import "@/styles/_vars.scss";

    .pick {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 8px;
        padding: 8px;
    }
    .class {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        color: #fff;
        text-decoration: none;
        transition: 0.3s;
        -webkit-tap-highlight-color: transparent;
        background-color: $primary;

        &:active {
            background-color: $primary * 1.4;
        }
    }
</style>

