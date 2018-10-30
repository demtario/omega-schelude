<template>
    <div class="schelude-wrapper">

        <Loading v-if="loading"/>
        <div class="schelude" v-else >
            <div v-for="(day, i) in days" :key="i">
                <h3 class="day">{{ week[i] }}</h3>
                <Lesson
                  v-for="(lesson, index) in day"
                  :key="index+i*10"
                  :lesson="lesson"
                  :hours="hours"
                  :day="i"
                />
            </div>
        </div>
        <Replacements :classname="$route.params.class" />

    </div>
</template>

<script>

import Replacements from '@/components/Replacements.vue';
import Lesson from '@/components/Lesson.vue';
import Loading from '@/components/Loading.vue';

import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const API = axios.create({
  baseURL: 'https://amedrygal.pl/api/',
  headers: { 'Cache-Control': 'no-cache' },
  // cache will be enabled by default
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

export default {
  name: 'Schelude',
  components: {
    Lesson, Replacements, Loading
  },
  data() {
    return {
      days: [],
      hours: [],
      week: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'],
      loading: true
    };
  },
  mounted() {
    this.$store.commit('setTitle', this.$route.params.class);

    API.get(`4h.php?${this.$route.params.class}`)
      .then((res) => {
        // console.table(res.data)
        this.days = res.data.days;
        this.hours = res.data.hours;
        this.loading = false
      })
      .catch((err) => {
        throw (err);
      });
  },
};
</script>

<style lang="scss" scoped>
    .schelude {
        margin-bottom: 30vh;
    }
    .day {
        color: var(--primary);
        width: 80%;
        margin: 0 auto;
        padding: 3px;
        font-weight: 300;
        font-size: 16px;
        margin-top: 16px;
        margin-bottom: 8px;
        border-bottom: solid 1px var(--primary);
    }
</style>
