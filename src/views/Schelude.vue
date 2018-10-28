<template>
    <div class="schelude-wrapper">
        <div class="schelude">

            <div v-for="(day, i) in days" :key="i">
                <h3 class="day">{{ week[i] }}</h3>
                <Lesson
                  v-for="(lesson, index) in day"
                  :key="index+i*10"
                  :lesson="lesson"
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
    Lesson, Replacements,
  },
  data() {
    return {
      days: [],
      week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    };
  },
  created() {
    this.$route.meta.title = this.$route.params.class;
  },
  mounted() {
    API.get('4h.php')
      .then((res) => {
        // console.table(res.data)
        this.days = res.data.days;
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
        margin-bottom: 0px;
        border-bottom: solid 1px var(--primary);
    }
</style>
