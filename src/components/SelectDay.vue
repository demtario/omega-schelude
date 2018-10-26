<template>
    <div class="select-day">
        <router-link to="/monday" exact>Poniedziałek</router-link>
        <router-link to="/tuesday" exact>Wtorek</router-link>
        <router-link to="/wednesday" exact>Środa</router-link>
        <router-link to="/thursday" exact>Czwartek</router-link>
        <router-link to="/friday" exact>Piątek</router-link>
    </div>
</template>

<script>
export default {
    name: 'SelectDay'
}
</script>

<style lang="scss" scoped>
    .select-day {
        overflow-x: scroll;
        display: flex;
        justify-content: flex-start;
        height: 36px;

        &::-webkit-scrollbar {
            display: none;
        }

        a {
            width: 200px;
            color: #fff;
            text-transform: uppercase;
            font-size: 14px;
            padding: 8px;
            text-decoration: none;
            display: inline-block;
            border-bottom: solid 2px transparent;
            transition: 0.3s;

            &.router-link-active {
                border-color: var(--primary)
            }
        }
    }
</style>

