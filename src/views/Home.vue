<template>
    <div class="home">
        <img src="@/assets/omega.svg" alt="">
        <h1>MultiSchool Mode</h1>
        <router-link to="/select-school" class="btn">Get started</router-link>
    </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    this.$store.commit('setTitle', this.$route.meta.title)
  }
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_vars.scss";

    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
            // margin-top: -20px;
            font-size: 1.6em;
            color: $secondary*1.8;
        }

        img {
            width: 50%;
            color: var(--primary);
            margin: 0 auto;
        }
    }
</style>

