<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import cover from '../assets/cover.jpeg'
import { useRouter } from 'vue-router';
const title = "ART GALLERY"
const currentDate = computed(() => {
    return new Date().toDateString()
})

const isDark = inject<Ref<boolean>>('isDark');
const router = useRouter()
const gotoAbout = () => {
    router.push('/about')
}
const gotoCatalog = () => {
    router.push('/catalog')
}


</script>
<template>
    <div class="flex flex-col justify-between">
        <header class="pl-12 flex justify-between pt-6">
            <div>
                <div class="w-14 h-2" :class="{ 'bg-black': !isDark, 'bg-white': isDark }"></div>
                <h1 class="w-10 p-0 m-0">{{ title }}</h1>
            </div>
            <div class="text-5 flex gap-20 pr-12">
                <label :class="`${isDark ? 'dark' : 'light'}`" class="yoki-tab" @click="gotoAbout">
                    About
                </label>
                <label :class="`${isDark ? 'dark' : 'light'}`" class="yoki-tab" @click="gotoCatalog">
                    Catalog
                </label>
                <label :class="`${isDark ? 'dark' : 'light'}`" class="yoki-tab">
                    Gallery
                </label>
            </div>
        </header>
        <main class="flex justify-between mt-24">
            <div class="flex-1 flex justify-center items-center">
                <div :style="`background-image:url(${cover})`" class="w-80 h-120 bg-cover bg-center rounded-4">

                </div>
            </div>
            <div class="flex-1 relative">

                <div class="text-25 fw-900" style="letter-spacing:100px;">
                    作品集
                </div>
                <div class="text-40 fw-900 absolute left-74 top-20">
                    UI
                </div>
                <div class="text-20 fw-900 design relative top--10" style="letter-spacing:30px;">
                    DESIGN
                </div>
            </div>
        </main>
        <footer class="absolute bottom-6 left-0 right-0 flex justify-between px-12">
            <div>
                <h1 class="w-10 p-0 m-0">Yoki</h1>
                <div class="w-14 h-2" :class="{ 'bg-black': !isDark, 'bg-white': isDark }"></div>
            </div>
            <div class="float-right">
                <h3>
                    {{ currentDate }}
                </h3>
            </div>
        </footer>
    </div>
</template>

<style lang="less">
.design::first-letter {
    font-size: 200px;
}

.yoki-tab {
    cursor: pointer;
    height: fit-content;
}

.yoki-tab:hover {
    border-bottom: 8px solid var(--primary-text-color);
}
</style>