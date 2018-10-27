<template>
    <div class="header-wrapper">
        <div class="header">
            <i class="fas fa-chevron-left" @click="goBack()"></i>
            <h1>OmegaSchelude</h1>
            <router-link to="/preferences"><i class="fas fa-cog"></i></router-link>
        </div>
        <h2>{{ $route.meta.title }}</h2>
    </div>
</template>

<script>
import SelectDay from "@/components/SelectDay.vue";

export default {
    name: 'Header',
    components: {
        SelectDay
    },
    data: () => {
        return {
            
        }
    },
    methods: {
        goBack: function () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        }
    }
};
</script>

<style lang="scss" scoped>
    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background-color: #1f1d2c;
        border-bottom: solid 2px #1a1a22;

        h2 {
            color: #fff;
            font-weight: 300;
            font-size: 0.8em;
            text-transform: uppercase;
            margin: 6px 0;
            transition: 0.3s;

            &:empty {
                margin: 0;
                color: transparent;
            }
        }
    }

    .header {
        color: var(--primary);
        height: 48px;
        display: flex;
        justify-content: space-between;
        padding: 0 14px;
        align-items: center;

        i {
            color: #fff;
            font-size: 0.8em;
            cursor: pointer;
            color: #aaa;
        }

        h1 {
            margin: 0;
            font-weight: 300;
            font-size: 20px;
            text-align: left;
        }
    }
</style>

