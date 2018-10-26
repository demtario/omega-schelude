<template>
    <div class="lesson" :class="{'lesson--active': isActive, 'lesson--substitution': isSubstitution}">
        <div class="lesson__hours">
            {{ lesson.hours[0].h }} <small>{{ lesson.hours[0].m }}</small> - {{ lesson.hours[1].h }} <small>{{ lesson.hours[1].m }}</small>
        </div>
        <div class="lesson__name">
            {{ lesson.name }}
        </div>
        <div class="lesson__room"><span>{{lesson.teacher}}</span> {{ lesson.room }}</div>
    </div>
</template>

<script>
export default {
    name: 'Lesson',
    data: () => {
        return {
            isActive: false,
            isSubstitution: false,
        }
    },
    mounted() {
        let hours = this.lesson.hours.split("-")
        hours[0] = hours[0].split(":")
        hours[1] = hours[1].split(":")

        this.lesson.hours = [
            {h: hours[0][0], m:hours[0][1]},
            {h: hours[1][0], m:hours[1][1]}
        ]

        
        let today = new Date();

        let first = new Date(today.getFullYear(), today.getMonth(), today.getDate(), this.lesson.hours[0].h, this.lesson.hours[0].m)
        let last = new Date(today.getFullYear(), today.getMonth(), today.getDate(), this.lesson.hours[1].h, this.lesson.hours[1].m)

        if(today.getTime() > first.getTime() && today.getTime() < last.getTime()) this.isActive = true;
    },
    props: {
        lesson: Object
    }
}
</script>

<style lang="scss" scoped>
    .lesson {
        display: grid;
        grid-template-columns: 0.6fr 1fr 0.3fr;
        grid-gap: 8px;
        padding: 12px;
        color: #aaa;
        border-left: solid 4px transparent;
        transition: 0.3s;
        position: relative;

        &--active {
            border-left: solid 4px var(--primary);
            background-color: #14131b;
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

        &__hours {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            font-size: 1em;
            font-weight: 300;

            small {
                font-size: 0.7em;
            }
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

