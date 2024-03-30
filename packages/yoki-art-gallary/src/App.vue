<script setup lang="ts">
import { useDark, useToggle, } from '@vueuse/core';
import { darkTheme, lightTheme, NConfigProvider, NFloatButton, NIcon, NTooltip } from 'naive-ui';
import { SunnyOutline, MoonOutline, PrintSharp, PrintOutline } from '@vicons/ionicons5'
import { computed, nextTick, provide, ref, toRef } from 'vue';
import { useRoute } from 'vue-router';
const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  onChanged(isDark) {
    if (isDark) {
      document.body.style.backgroundColor = '#000'
      document.body.style.color = '#fff'
    } else {
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#000'
    }
  },
})
const route = useRoute()
const showDarkModeIcon = ref(true);
const showPrintIcon = ref(true);
const isAboutPage = computed(() => {
  return route.path === '/about'
});
const toggleDark = useToggle(isDark)
provide('isDark', toRef(isDark))

const doPrint = () => {
  showDarkModeIcon.value = false;
  showPrintIcon.value = false;
  nextTick(() => {
    window.print();
    showDarkModeIcon.value = true;
    showPrintIcon.value = true;
  })
}
</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : lightTheme">
    <RouterView></RouterView>
    <NFloatButton v-if="showDarkModeIcon" @click="() => toggleDark()" right="10" bottom="10">
      <NTooltip placement="left">
        <template #trigger>
          <NIcon :component="isDark ? SunnyOutline : MoonOutline" />
        </template>
        明暗
      </NTooltip>
    </NFloatButton>
    <NFloatButton v-if="isAboutPage && showPrintIcon" @click="doPrint" right="10" bottom="60">
      <NTooltip placement="left">
        <template #trigger>
          <NIcon :component="isDark ? PrintOutline : PrintSharp" />
        </template>
        打印
      </NTooltip>
    </NFloatButton>
  </NConfigProvider>
</template>
<style lang="less">
.header-title {
  border-bottom: 4px solid var(--primary-text-color);

  .resume {
    color: var(--primary-bg-color);
    /* 设置字体颜色为白色 */
    -webkit-text-stroke-width: 1px;
    /* 设置文本描边宽度 */
    -webkit-text-stroke-color: var(--primary-text-color);
    /* 设置文本描边颜色为黑色 */
  }
}
</style>