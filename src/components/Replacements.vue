<template>
    <div class="replacements" :class="{'replacements--active': active}">
        <div class="replacements__head" @click="activate()">
            <span>Zastępstwa</span>
            <font-awesome-icon icon="angle-double-up" />
        </div>
        <div class="replacements__body">
            <div class="teacher">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'replacements',
    data: () => {
        return {
            active: false
        }
    },
    methods: {
        activate: function () {
            this.active = !this.active;
        }
    },
    props: {
        classname: String
    },
    mounted() {

    }
}
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
         }
    }

    .teacher {

    }
</style>

