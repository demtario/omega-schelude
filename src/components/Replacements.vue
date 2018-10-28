<template>
  <v-touch @swipedown="disactivate()">
    <div class="replacements" :class="{'replacements--active': active}">

      <v-touch @swipeup="activate()">
        <div class="replacements__head" @click="toggle()">
          <span>Zastępstwa</span>
          <font-awesome-icon icon="angle-double-up" />
        </div>
      </v-touch>

      <div class="replacements__body">
        <p>Nie zaplanowano zastępstw
          <font-awesome-icon icon="sad-cry" />
        </p>
      </div>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'replacements',
  data: () => ({
    active: false,
  }),
  methods: {
    toggle() {
      this.active = !this.active;
    },
    activate() {
      this.active = true;
    },
    disactivate() {
      this.active = false;
    },
  },
  props: {
    classname: String,
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_vars.scss";

  .replacements {
    position: fixed;
    bottom: calc(-60vh - 1px);
    left: 0;
    width: 100%;
    background-color: $secondary*1.2;
    border-top: solid 2px #1A1A22;
    transition: 0.3s;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;

    &--active {
      bottom: 0;
    }

    &__head {
      padding: 12px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      background-color: $secondary*1.3;
      border-bottom: solid 1px $secondary;
      font-size: 0.9em;

      span {
        color: #aaa;
      }

      i {
        color: inherit;
      }
    }

    &__body {
      height: 60vh;
      box-sizing: border-box;
      padding: 8px;

      p {
        color: #aaa;
      }
    }
  }

  .teacher {}
</style>
