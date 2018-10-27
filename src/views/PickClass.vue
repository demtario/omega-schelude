<template>
    <div class="pick">
        <router-link class="class" v-for="(item, index) in classes" :to="'/schelude/'+item.name" :key="index">
            {{ item.name }}
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'pick-class',
    data: () => {
        return {
            classes: [
                {name:"1A"},
                {name:"2C"},
                {name:"3F"},
                {name:"4D"},
                {name:"4H"}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .pick {
        // padding-top: 16px;
    }
    .class {
        display: block;
        padding: 8px 32px;
        color: #fff;
        text-decoration: none;
        border-bottom: solid 1px #1F1D2C;
        transition: 0.3s;
        // text-align: left;
        -webkit-tap-highlight-color: transparent;

        &:first-of-type {
            border-top: solid 1px #1F1D2C;
        }

        &:active {
            background-color: var(--primary);
        }
    }
</style>

