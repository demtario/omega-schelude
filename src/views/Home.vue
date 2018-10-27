<template>
    <div class="home">
        <img src="@/assets/omega-1024x1024.png" alt="">
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

        img {
            width: 75%;
            margin: 0 auto;
        }
    }
</style>

