<template>
    <div class="lesson"
        :class="{'lesson--active': isActive, 'lesson--substitution': isSubstitution}"
    >
        <div class="lesson__nr">
            {{ lesson.no }}
        </div>
        <div class="lesson__hours">
            {{ lesson.hours[0].h }} <small>{{ lesson.hours[0].m }}</small>
             - {{ lesson.hours[1].h }} <small>{{ lesson.hours[1].m }}</small>
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

export default {
  name: 'Lesson',
  data: () => ({
    isActive: false,
    isSubstitution: false,
  }),
  mounted() {
    const hours = this.lesson.hours.split('-');
    hours[0] = hours[0].split(':');
    hours[1] = hours[1].split(':');

    this.lesson.hours = [
      { h: hours[0][0], m: hours[0][1] },
      { h: hours[1][0], m: hours[1][1] },
    ];


    const today = new Date();

    const first = new Date(today.getFullYear(), today.getMonth(), today.getDate(), this.lesson.hours[0].h, this.lesson.hours[0].m);
    const last = new Date(today.getFullYear(), today.getMonth(), today.getDate(), this.lesson.hours[1].h, this.lesson.hours[1].m);

    if (new Date() === getNextWeekday(this.day)) {
      if (today.getTime() > first.getTime() && today.getTime() < last.getTime()) 
        this.isActive = true;
    }
  },
  props: {
    lesson: Object,
    day: Number,
  },
};

</script>

<style lang="scss" scoped>
    .lesson {
        display: grid;
        grid-template-columns: 10px 100px 1fr;
        grid-gap: 4px;
        padding: 12px;
        color: #aaa;
        border-left: solid 4px transparent;
        transition: 0.3s;
        position: relative;

        &--active {
            border-left: solid 4px var(--primary);
            background-color: #131b13;
        }

        &--substitution {
            // border-left: solid 4px #FBB901;
            background-color: #FBB9010a;
        }

        >* {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__nr {
            left: 8px;
            font-size: 0.8em;
            color: #333142;
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

            span {
                color: var(--primary);
                margin-right: 6px;
                text-transform: uppercase;
            }
        }

    }
</style>

