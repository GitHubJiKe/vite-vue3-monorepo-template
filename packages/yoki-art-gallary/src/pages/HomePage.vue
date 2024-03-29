<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui';
</script>
<template>
    <div>
        <n-tabs type="line" animated justify-content="end" size="large">
            <n-tab-pane name="About" tab="About">
                About
            </n-tab-pane>
            <n-tab-pane name="Categroy" tab="Categroy">
                Categroy
            </n-tab-pane>
            <n-tab-pane name="Gallery" tab="Gallery">
                Gallery
            </n-tab-pane>
        </n-tabs>
    </div>
</template>

<style lang="less">
.n-tabs-wrapper {
    padding-right: 40px;
    gap: 40px;
}
</style>