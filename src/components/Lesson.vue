<template>
    <div class="lesson"
        :class="{'lesson--active': isActive, 'lesson--substitution': isSubstitution}" >
        <div class="lesson__nr">
            {{ lesson.no }}
        </div>
        <div class="lesson__hours">
            {{ hour()[0].h }} <small>{{ hour()[0].m }}</small>
             - {{ hour()[1].h }} <small>{{ hour()[1].m }}</small>
        </div>
        <div class="groups">
            <div class="group" v-for="(group, i) in lesson.groups" :key="i">
                <div class="lesson__name">
                {{ group.name }}
                </div>
                <div class="lesson__room"><span>{{group.teacher}}</span> {{ group.room }}</div>
            </div>
        </div>
    </div>
</template>

<script>
function getNextWeekday(day) {
  const date = new Date();
  const currday = date.getDay();
  let prevMonday;
  if (date.getDay() === day) {
    prevMonday = new Date().setDate(date.getDate());
  } else {
    prevMonday = new Date().setDate(date.getDate() + currday);
  }

  return prevMonday;
}

function getLastLessonEnd(hourset) {
  const hours = hourset.split('-');
  hours[0] = hours[0].split(':');
  hours[1] = hours[1].split(':');

  return {
    h: hours[1][0],
    m: hours[1][1]
  }
}

export default {
  name: 'Lesson',
  props: {
    lesson: Object,
    hours: Array,
    day: Number,
  },
  data: () => ({
    isActive: false,
    isSubstitution: false,
    hour() {
      const hours = this.hours[this.lesson.no].split('-');
      hours[0] = hours[0].split(':');
      hours[1] = hours[1].split(':');

      return [
        { h: hours[0][0], m: hours[0][1] },
        { h: hours[1][0], m: hours[1][1] },
      ]
    },
  }),
  mounted() {

    const today = new Date();
    let start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), this.hour()[0].h, this.hour()[0].m);
    let end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), this.hour()[1].h, this.hour()[1].m);

    if(this.lesson.no != 0) {
      // Jeśli to nie pierwsza lekcja (aka lekcja 0, nie mylić z pierwszą lekcją danego dnia)
      let lastEnd = getLastLessonEnd(this.hours[this.lesson.no-1])
      start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), lastEnd.h, lastEnd.m)
    }

    // Sprawdzanie czy obecna lekcja jest aktualna lub następna
    if (new Date().getTime() === getNextWeekday(this.day+1)) {
      if (today.getTime() > start.getTime() && today.getTime() < end.getTime())
        this.isActive = true
    
    }
  },
};

</script>

<style lang="scss" scoped>
  @import "@/styles/_vars.scss";

    .lesson {
        display: grid;
        grid-template-columns: 10px 100px 1fr 5px;
        grid-gap: 4px;
        padding: 12px;
        color: #aaa;
        border-left: solid 4px transparent;
        transition: 0.3s;
        position: relative;

        &--active {
            border-left: solid 4px var(--primary);
            background-color: $secondary*0.8;
        }

        &--substitution {
            border-left: solid 4px $yell;

            .lesson__name {
                color: $yell;
            }
        }

        >* {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__nr {
            left: 8px;
            font-size: 0.8em;
            color: $secondary*1.8;
        }

        &__hours {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1em;
            font-weight: 300;

            small {
                font-size: 0.7em;
                position: relative;
                top: -4px;
            }
        }

        .groups {
            display: block;
        }

        .group {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 0.3fr;
        }

        &__name {
            color: #fff;
            margin-right: auto;
        }

        &__room {
            font-size: 0.8em;
            font-style: italic;
            font-weight: 300;
            text-align: right;
            display: flex;

            span {
                color: var(--primary);
                margin-right: 4px;
                text-transform: uppercase;
            }
        }

    }
</style>
