<template>
    <div class="header-wrapper">
        <div class="header">
            <font-awesome-icon icon="angle-left" @click="goBack()" />
            <h1>OmegaSchelude</h1>
            <router-link to="/preferences"><font-awesome-icon icon="cog" /></router-link>
        </div>
        <transition name="fade">
            <h2>{{ $route.meta.title }}</h2>
        </transition>
    </div>
</template>

<script>
import SelectDay from '@/components/SelectDay.vue';

export default {
  name: 'Header',
  components: {
    SelectDay,
  },
  data: () => ({

  }),
  methods: {
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background-color: #1f1d2c;
        border-bottom: solid 2px #1a1a22;

        h2 {
            color: #fff;
            font-weight: 300;
            font-size: 0.8em;
            text-transform: uppercase;
            margin: 6px 0;
            transition: 0.3s;

            &:empty {
                margin: 0;
                color: transparent;
            }
        }
    }

    .header {
        color: var(--primary);
        height: 48px;
        display: flex;
        justify-content: space-between;
        padding: 0 14px;
        align-items: center;

        svg {
            color: #fff;
            font-size: 0.8em;
            cursor: pointer;
            color: #aaa;
        }

        h1 {
            margin: 0;
            font-weight: 300;
            font-size: 20px;
            text-align: left;
        }
    }
</style>

