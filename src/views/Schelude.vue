<template>
    <div class="schelude">

        <h3 class="day">Monday</h3>
        <Lesson v-for="(lesson, index) in lessons" :key="index" :lesson="lesson" />
        <h3 class="day">Tuesday</h3>
        <!-- <Lesson v-for="(lesson, index) in lessons" :key="index+20" :lesson="lesson" /> -->
        <h3 class="day">Wednesday</h3>
        <!-- <Lesson v-for="(lesson, index) in lessons" :key="index+40" :lesson="lesson" /> -->
        <h3 class="day">Thursday</h3>
        <h3 class="day">Friday</h3>
    </div>
</template>

<script>

import Lesson from "@/components/Lesson.vue";
import axios from 'axios';

export default {
    name: 'Schelude',
    components: {
        Lesson
    },
    data: () => {
        return {
            lessons: [
                {
                    hours: "8:00-8:45",
                    name: "j.polski",
                    teacher: "Ku",
                    room: "311"
                },
                {
                    hours: "9:55-9:40",
                    name: "matematyka",
                    teacher: "Wd",
                    room: "111"
                },
                {
                    hours: "10:50-11:35",
                    name: "j.angielski",
                    teacher: "Ga",
                    room: "203"
                },
                {
                    hours: "11:45-12:30",
                    name: "u_hist.i sp.",
                    teacher: "No",
                    room: "106"
                },
                {
                    hours: "12:40-13:25",
                    name: "wit.i ap.int",
                    teacher: "Bm",
                    room: "218"
                },
                {
                    hours: "13:35-14:20",
                    name: "r_informatyka",
                    teacher: "Kn",
                    room: "pc4"
                }
            ]
        }
    },
    created: function () {
        this.$route.meta.title = this.$route.params.class
    }
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
