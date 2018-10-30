<template>
    <div class="preferences">

    </div>
</template>

<script>
export default {
  name: 'preferences',
  mounted() {
    this.$store.commit('setTitle', this.$route.meta.title)
  }
};
</script>

<style lang="scss" scoped>
    .preferences {
        min-height: calc(100vh - 60px);
    }
</style>
