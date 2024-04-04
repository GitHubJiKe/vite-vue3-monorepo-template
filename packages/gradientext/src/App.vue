<script lang="ts" setup>
import GTHeader from "./GTHeader.vue";
import GTFooter from "./GTFooter.vue";
import GTContent from "./GTContent.vue";
import { NMessageProvider } from "naive-ui";
</script>
<template>
  <NMessageProvider>
    <div class="flex flex-col justify-between h-100vh px-8">
      <GTHeader />
      <GTContent class="flex-1" />
      <GTFooter />
    </div>
  </NMessageProvider>
</template>
