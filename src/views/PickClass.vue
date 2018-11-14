<template>
    <div class="wrapper">

      <Loading v-if="loading" />
      <Error v-if="error && !loading" message="Brak internetu!" />

      <div class="pick" v-else >
        <router-link
          class="class"
          v-for="(item) in classes"
          @click.native="handleClassSelect(item.name, item.id)"
          to="/schelude/"
          :key="item.id"
        >
          <div class="class__content">
            <!-- <font-awesome-icon icon="calendar-alt" /> -->
            {{ item.name }}
          </div>
        </router-link>
      </div>
      <!-- <Replacements :classname="null" /> -->

    </div>
</template>

<script>
import Replacements from '@/components/Replacements.vue';

import Loading from '@/components/Loading.vue';
import Error from '@/components/Error.vue';

import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const API = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Cache-Control': 'no-cache' },
  // cache will be enabled by default
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

export default {
  name: 'pick-class',
  components: {
    Replacements, Loading, Error
  },
  data() {
    return {
      classes: [],
      loading: true,
      error: false,
      school: this.$route.params.school
    };
  },
  methods: {
    handleClassSelect(name, id) {
      this.$store.commit('setClass', {id, name});
    }
  },
  mounted() {
    // Sprawdzanie czy wybrano szkołę
    if(this.$store.state.school == null) {
      this.$router.push("/select-school")
    }

    this.$store.commit('setTitle', this.$store.state.schoolName)

    // reset klasy
    this.$store.commit('setClass',  {id:null, name:''});

    API.get(`classes/${this.$store.state.school}`)
      .then((res) => {
        // console.log(res.data)
        this.classes = res.data.classes;
        this.loading = false;
      })
      .catch((err) => {
        // throw (err);
        // alert("Brak internetu!");
        this.loading = false;
        this.error = true;
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
        font-size: 1.2em;
        font-weight: 300;

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

