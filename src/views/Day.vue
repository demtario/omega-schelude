<template>
    <div class="day">
        {{ $route.params.day }}

        <Lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
    </div>
</template>

<script>

import Lesson from "@/components/Lesson.vue";

export default {
    name: 'day',
    components: {
        Lesson
    },
    data: () => {
        return {
            lessons: [
                {
                    id: 0,
                    hours: "8:00-8:45",
                    name: "j.polski",
                    teacher: "Ku",
                    room: "311"
                },
                {
                    id: 1,
                    hours: "9:55-9:40",
                    name: "matematyka",
                    teacher: "Wd",
                    room: "111"
                },
                {
                    id: 2,
                    hours: "10:50-11:35",
                    name: "j.angielski",
                    teacher: "Ga",
                    room: "203"
                },
                {
                    id: 3,
                    hours: "11:45-12:30",
                    name: "u_hist.i sp.",
                    teacher: "No",
                    room: "106"
                },
                {
                    id: 4,
                    hours: "12:40-13:25",
                    name: "wit.i ap.int",
                    teacher: "Bm",
                    room: "218"
                },
                {
                    id: 5,
                    hours: "13:35-14:20",
                    name: "r_informatyka",
                    teacher: "Kn",
                    room: "pc4"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
