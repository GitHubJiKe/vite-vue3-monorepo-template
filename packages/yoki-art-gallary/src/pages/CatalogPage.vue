<script setup lang="ts">
import { inject, Ref } from 'vue';
import pingmian from '../assets/pingmian.jpeg'
import vision from '../assets/vision.jpeg'
import phone from '../assets/phone.jpeg'
const isDark = inject<Ref<boolean>>('isDark');
</script>

<template>
    <div class="px-12 flex flex-col h-100dvh gap-40">
        <div class="text-12 w-120 header-title" :class="`${isDark ? 'dark' : 'light'}`">
            目录
            <label class="text-12 float-right relative top-3 resume">
                CATALOG
            </label>
        </div>
        <div class="flex justify-between px-40">
            <div class="yoki-card text-center rounded-8 px-8 py-12">
                <img :src="pingmian" alt="平面" class="w-40 h-24 rounded-4">
                <div class="text-10 mt-4">1</div>
                <div class="text-14">平面设计</div>
            </div>
            <div class="yoki-card text-center rounded-8 px-8 py-12">
                <img :src="vision" alt="视觉" class="w-40 h-24 rounded-4">
                <div class="text-10 mt-4">2</div>
                <div class="text-14">视觉设计</div>
            </div>
            <div class="yoki-card text-center rounded-8 px-8 py-12">
                <img :src="phone" alt="实体" class="w-40 h-24 rounded-4">
                <div class="text-10 mt-4">3</div>
                <div class="text-14">其他设计</div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.yoki-card {
    background-color: #b8bab9;
}
</style>