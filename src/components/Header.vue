<template>
    <div class="header-wrapper">
        <div class="header">
            <!-- <i class="fas fa-chevron-left"></i> -->
            <h1>OmegaSchelude</h1>
            <!-- <i class="fas fa-cog"></i> -->
        </div>
        <SelectDay />
    </div>
</template>

<script>
import SelectDay from "@/components/SelectDay.vue";

export default {
    name: 'Header',
    components: {
        SelectDay
    }
}
</script>

<style lang="scss" scoped>
    .header-wrapper {
        background-color: #1f1d2c;
        border-bottom: solid 2px #1a1a22;
    }

    .header {
        color: var(--primary);
        height: 48px;
        display: flex;
        justify-content: center;
        padding: 0 14px;
        align-items: center;

        i {
            color: #fff;
            cursor: pointer;
        }

        h1 {
            margin: 0;
            font-weight: 300;
            font-size: 20px;
            text-align: left;
        }
    }
</style>

