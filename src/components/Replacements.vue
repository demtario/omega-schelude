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
        <p v-if="data.length == 0">Nie zaplanowano zastępstw<font-awesome-icon icon="sad-cry" /></p>

        <div class="teacher" v-for="(item, i) in data" :key="i" >
            <div class="teacher__head">
              <div class="box hour">
                <p>Godzina</p>
                <span>{{ item.hours[0].h }} <small>{{ item.hours[0].m }}</small>
                - {{ item.hours[1].h }} <small>{{ item.hours[1].m }}</small></span>
              </div>
              <div class="box origin">
                <p>lekcja</p>
                <span>matematyka</span>
              </div>
            </div>
            <div class="teacher__body">
              <div class="box name">
                <p>zastępca</p>
                <span>{{ item.teacher }}</span>
              </div>
              <div class="smallbox">
                <i>uwagi</i>
                <span>{{ item.meta }}</span>
              </div>
              <div class="smallbox">
                <i>opis</i>
                <span>{{ item.description }}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'replacements',
  data() {
    return {
      active: false,
      data: [
        {
          lesson: 5,
          hours: '10:50-11:35',
          originally: 'matematyka',
          description: '1 B - Wiedza o społeczeństwie, 107',
          teacher: 'T. Janka',
          meta: 'za nieobecny oddział',
        },
      ],
    };
  },
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
    this.data.forEach((item) => {
      const hours = item.hours.split('-');
      hours[0] = hours[0].split(':');
      hours[1] = hours[1].split(':');

      item.hours = [
        { h: hours[0][0], m: hours[0][1] },
        { h: hours[1][0], m: hours[1][1] },
      ];
    });
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
    background-color: $secondary*1.1;
    border-top: solid 1px $secondary*0.9;
    transition: 0.3s;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;

    &--active {
      bottom: 0;

      .replacements__head > svg {
        transform: rotate(180deg);
      }
    }

    &__head {
      padding: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      background-color: $secondary*1.2;
      border-bottom: solid 1px $secondary*0.9;
      font-size: 0.9em;

      span {
        color: #aaa;
      }

      svg {
        color: $secondary*0.9;
        transform: rotate(0deg);
        transition: 0.3s;
        margin-right: 2px;
      }
    }

    &__body {
      height: 60vh;
      box-sizing: border-box;
      padding: 8px;

      p {
        color: #aaa;

        svg {
          margin-left: 4px;
        }
      }
    }
  }

  .teacher {
    background-color: $primary * 0.8;
    background: linear-gradient(to right, $primary * 0.7, $primary * 0.8);
    display: grid;
    grid-template-columns: 0.3fr  1fr;
    border-radius: 6px;
    overflow: hidden;

    &__head {
      background-color: $primary*0.9;
      padding: 8px;
    }

    &__body {
      padding: 8px;
    }

  }

  .teacher .box {
    text-align: left;
    font-size: 16px;

    &.hour {
      margin-bottom: 12px;
    }

    p {
      text-transform: uppercase;
      color: #ddd;
      font-size: 10px;
      margin: 0;
    }

    span {
      color: #fff;
    }

    &.hour span{
      font-size: 1.3em;
      display: flex;

      small {
        position: relative;
        top: 0px;
        font-size: 0.6em;
      }
    }

    &.origin span {
      text-decoration: line-through;
    }

    &.name {
      margin-bottom: 6px;

      span {
        font-size: 1.2em;
      }
    }
  }

  .teacher .smallbox {
    text-align: left;
    margin-bottom: -4px;
    width: 100%;

    i {
      text-transform: uppercase;
      color: #ddd;
      margin: 0;
      font-style: italic;
      font-size: 10px;
      margin-right: 8px;
    }

    span {
      color: #fff;
      font-size: 12px;
      line-height: 10px;
    }
  }
</style>
