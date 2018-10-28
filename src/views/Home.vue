<template>
    <div class="home">
        <img src="@/assets/omega-1024x1024.png" alt="">
        <h1>ZSE Mode</h1>
        <router-link to="/select-class" class="btn">Get started</router-link>
    </div>
</template>

<script>
export default {
    name: 'home',
    created: () => {
        
    }
}
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
            margin-top: -20px;
            font-size: 1.6em;
        }

        img {
            width: 70%;
            margin: 0 auto;
        }
    }
</style>

