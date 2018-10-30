<template>
    <div class="loading">
        <div class="circle">
            <div class="circle">
                <div class="circle">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading',
}
</script>

<style lang="scss" scoped>
    .loading {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 160px;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;

        .circle {
            width: 90%;
            height: 90%;
            border-radius: 50%;
            box-sizing: border-box;
            border: solid 2px var(--primary);
            border-top: solid 2px transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: rotate infinite 2s;
        }

        .circle > .circle {
            border: solid 2px var(--primary);
            border-bottom: solid 2px transparent;
        }

        .circle > .circle > .circle {
            border: solid 2px var(--primary);
            border-top: solid 2px transparent;
        }

        .circle > .circle > .circle > .circle {
            border: solid 2px var(--primary);
            border-bottom: solid 2px transparent;
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>

