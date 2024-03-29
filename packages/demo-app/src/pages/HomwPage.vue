<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { HelloWorld as SharedHelloWorld } from '@shared/components';
import { sayHello } from '@shared/utils';
import { NButton } from "naive-ui";
import { useAppStore } from '../store/app';

const { title } = useAppStore()
const doSayHello = () => {
    sayHello('Demo App')
}
</script>

<template>
    <div class="text-center">
        <RouterLink to="about">About</RouterLink>
        <br>
        <NButton type="primary" @click="doSayHello">say hello, I am NaiveUI Button</NButton>
        <SharedHelloWorld />
        <HelloWorld :msg="title" />
    </div>
</template>
