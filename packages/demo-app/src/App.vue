<script setup lang="ts">
import { useDark, useToggle, } from '@vueuse/core';
import { darkTheme, lightTheme, NConfigProvider, NFloatButton, NIcon, } from 'naive-ui';
import { SunnyOutline, MoonOutline } from '@vicons/ionicons5'
const isDark = useDark({
  selector: 'body',
  onChanged(isDark) {
    if (isDark) {
      document.body.style.backgroundColor = '#333'
      document.body.style.color = '#fff'
    } else {
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#333'
    }
  },
})

const toggleDark = useToggle(isDark)

</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : lightTheme">
    <RouterView></RouterView>
    <NFloatButton @click="() => toggleDark()" right="10" bottom="10">
      <NIcon :component="isDark ? SunnyOutline : MoonOutline" />
    </NFloatButton>
  </NConfigProvider>
</template>
