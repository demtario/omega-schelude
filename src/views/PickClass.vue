<template>
    <div class="pick">
        <router-link
          class="class"
          v-for="(item, index) in classes"
          :to="'/schelude/'+item"
          :key="index"
        >
            <div class="class__content">
              <font-awesome-icon icon="calendar-alt" />
              {{ item }}
            </div>
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
      color: #fff;
      text-decoration: none;
      transition: 0.3s;
      -webkit-tap-highlight-color: transparent;
      background: linear-gradient(to bottom right, $primary * 0.8, $primary);
      border-radius: 50%;
      border: solid 6px $secondary * 1.2;
      padding-top: calc(100% - 2*6px);
      position: relative;
      box-sizing: border-box;

      &--default {
        background-color: $yell;
        color: $secondary*2;

        svg {
          opacity: 0.4 !important;;
        }
      }

      &__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 16px;
        box-sizing: border-box;
        font-size: 0.8em;

        svg {
          font-size: 6vw;
          opacity: 0.6;
          margin-bottom: 6px;
        }
      }

      &:active {
          background-color: $primary * 1.4;
      }
    }
</style>

