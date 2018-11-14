<template>
    <div class="wrapper">

      <Loading v-if="loading" />
      <Error v-if="error && !loading" message="Brak internetu!" />

      <div class="pick" v-else >
        <router-link
          class="school"
          v-for="(item) in schools"
          @click.native="handleSelectSchool(item.name, item.id)"
          to="/select-class"
          :key="item.id"
        >
          <div class="school__name">
            {{ item.name }}
          </div>
          <div class="school__city">
            <font-awesome-icon icon="map-marker-alt" />
            {{ item.city }}
          </div>
          <button class="school__star">
              <font-awesome-icon icon="star" />
          </button>
        </router-link>

        <router-link to="#" class="btn">Dodaj szkołę</router-link>
      </div>

    </div>
</template>

<script>

import Loading from '@/components/Loading.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'pick-class',
  components: {
    Loading, Error
  },
  data() {
    return {
      schools: [],
      loading: false,
      error: false,
    };
  },
  methods: {
    handleSelectSchool(name, id) {
      this.$store.commit('setSchool', {id, name})
    }
  },
  mounted() {
    this.$store.commit('setTitle', this.$route.meta.title)

    // reset danych 
    this.$store.commit('setClass', {id:null, name:''});
    this.$store.commit('setSchool', {id:null, name:''});

    this.$api.get('schools')
      .then((res) => {
        // console.log(res.data)
        this.schools = res.data;
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
        padding: 8px;
    }

    .btn {
        width: 100px;
        margin: 0 auto;
        margin-top: 20px;
    }

    .school {
        display: grid;
        grid-template-columns: 1fr 40px;
        background-color: $secondary*0.9;
        padding: 8px;
        text-align: left;
        border-radius: 10px;
        margin: 6px 0;
        text-decoration: none;

        &__name {
            color: $primary;
        }

        &__city {
            color: #aaa;
            font-size: 0.7em;

            svg {
                opacity: 0.4;
                font-size: 0.8em;
            }
        }

        &__star {
            grid-column: 2/3;
            grid-row: 1/3;
            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 16px;
            color: $secondary*1.3;
            background-color: transparent;
            border: 0;
            transition: 0.3s;

            &--active {
                color: $primary;
            }
        }

        &:hover {
            background-color: $secondary*0.8;
        }
    }
</style>
