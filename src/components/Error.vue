<template>
    <div class="error">
        <font-awesome-icon icon="exclamation-circle" />
        <span>{{ message }}</span>
    </div>
</template>

<script>
export default {
    name: 'Error',
    props: {
        message: String
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/_vars.scss";

    .error {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 160px;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        color: $secondary * 2;

        svg {
            font-size: 2em;
            color: firebrick;
            margin-bottom: 8px;
            opacity: 0.8;
        }
    }
</style>

