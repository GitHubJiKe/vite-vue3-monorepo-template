<script setup lang="ts">
import { computed, ref } from "vue";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-markup";
// @ts-ignore
import * as pnw from "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-dark.css";
import {
  NSwitch,
  NColorPicker,
  NSlider,
  NInputNumber,
  NButton,
  useMessage,
  NInput,
} from "naive-ui";
import { isMobileDevice, saveSVG } from "@shared/utils";
// 定义颜色变量
const color1 = ref("#00dbde"); // 默认红色
const color2 = ref("#fc00ff"); // 默认绿色
const isMobile = isMobileDevice();
// 定义字体大小变量
const fontSize = ref(isMobile ? 60 : 80); // 默认字体大小为30px
const width = ref(isMobile ? 380 : 500);
const height = ref(isMobile ? 80 : 100);
const positionX = ref(isMobile ? 40 : 48);
const positionY = ref(isMobile ? 62 : 78);
const text = ref("渐变色文字");
const bgColor = ref("#2d2d2d");
// 更新字体大小
const updateFontSize = () => {
  // 通过滚动条更新字体大小
  const textElement = document.querySelector("text");
  if (textElement) {
    textElement.setAttribute("font-size", fontSize.value + "px");
  }
};

// 更新渐变
const updateGradient = () => {
  // 更新渐变数据
  gradient.value.x1 = "0%";
  gradient.value.y1 = "0%";
  gradient.value.x2 = "100%";
  gradient.value.y2 = "0%";
  gradient.value.offset1 = "0%";
  gradient.value.offset2 = "100%";
};

// 渐变数据
const gradient = ref({
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "0%",
  offset1: "0%",
  offset2: "100%",
});

// 定义变量
const svgRef = ref();
// @ts-ignore
const formatCode = (code: string) =>
  new pnw.default().normalize(code, {
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
    "break-lines": 100,
    indent: 2,
    "remove-initial-line-feed": false,
    "tabs-to-spaces": 4,
    "spaces-to-tabs": 4,
  });
const svgCode = () => {
  return svgRef.value ? formatCode(svgRef.value.outerHTML) : "";
};
// @ts-ignore
window.$message = useMessage();
const copySVG = async () => {
  try {
    // 获取 SVG 元素的 outerHTML

    // 使用 Clipboard API 复制 SVG 代码到剪贴板
    await navigator.clipboard.writeText(svgCode());

    // 提示用户已复制
    // @ts-ignore
    window.$message.success("SVG代码已复制到剪贴板！");
  } catch (error) {
    console.error("复制失败:", error);
    // @ts-ignore
    window.$message.error("复制失败，请手动复制SVG代码。");
  }
};

const highlighter = (code: string) => {
  return highlight(code, languages.svg);
};

const isChecked = ref(false);

const X2 = computed(() => {
  return isChecked.value ? gradient.value.y2 : gradient.value.x2;
});

const Y2 = computed(() => {
  return isChecked.value ? gradient.value.x2 : gradient.value.y2;
});

const download = () => {
  const ele = document.body.querySelector("#svgTarget")! as HTMLElement;
  saveSVG(ele, text.value);
};
</script>

<template>
  <div class="flex gap-24 container">
    <div class="flex-1 flex flex-col justify-center items-center gap-2">
      <!-- 颜色选择器 -->
      <NColorPicker v-model:value="color1" @on-update:value="updateGradient">
        <template #label> 开始颜色 </template>
      </NColorPicker>

      <NColorPicker v-model:value="color2" @on-update:value="updateGradient">
        <template #label> 结束颜色 </template>
      </NColorPicker>

      <NColorPicker v-model:value="bgColor" @on-update:value="updateGradient">
        <template #label> 背景颜色 </template>
      </NColorPicker>

      <div class="flex">
        <label>10（最小）</label>
        <NSlider
          class="flex-1 w-90"
          :step="1"
          v-model:value="fontSize"
          @input="updateFontSize"
          :min="10"
          :max="300"
        />
        <label>300（最大）</label>
      </div>
      <div class="flex items-center">
        <label class="w-26 text-right"> 内容： </label>
        <div>
          <NInput
            style="width: 216px"
            v-model:value="text"
            placeholder="请输入内容"
          />
        </div>
      </div>
      <div class="flex items-center">
        <label class="w-26 text-right">宽度：</label>
        <NInputNumber v-model:value="width" placeholder="可输入" />
      </div>
      <div class="flex items-center">
        <label class="w-26 text-right">高度：</label>
        <NInputNumber v-model:value="height" placeholder="可输入" />
      </div>
      <div class="flex items-center">
        <label class="w-26 text-right">X坐标：</label>
        <NInputNumber v-model:value="positionX" placeholder="可输入" />
      </div>
      <div class="flex items-center">
        <label class="w-26 text-right">Y坐标：</label>
        <NInputNumber v-model:value="positionY" placeholder="可输入" />
      </div>
      <div class="flex items-center">
        <label class="w-26 text-right">渐变方向：</label>
        <div class="flex-1" style="width: 216px">
          <NSwitch v-model:value="isChecked">
            <template #checked> 纵向渐变 </template>
            <template #unchecked> 横向渐变 </template>
          </NSwitch>
        </div>
      </div>
      <svg
        :style="`background-color: ${bgColor};border-radius: 12px;`"
        :width="width"
        :height="height"
        xmlns="http://www.w3.org/2000/svg"
        ref="svgRef"
        id="svgTarget"
      >
        <defs>
          <linearGradient
            id="grad"
            :x1="gradient.x1"
            :y1="gradient.y1"
            :x2="X2"
            :y2="Y2"
          >
            <stop
              :offset="gradient.offset1"
              :style="'stop-color:' + color1 + ';stop-opacity:1'"
            />
            <stop
              :offset="gradient.offset2"
              :style="'stop-color:' + color2 + ';stop-opacity:1'"
            />
          </linearGradient>
        </defs>
        <text
          :x="positionX"
          :y="positionY"
          :font-size="fontSize + 'px'"
          :fill="'url(#grad)'"
        >
          {{ text }}
        </text>
      </svg>
    </div>
    <div class="flex-1 flex flex-col gap-2 justify-center">
      <prism-editor
        readonly
        class="my-editor"
        :model-value="svgCode()"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
      <NButton @click="copySVG">复制代码</NButton>
      <NButton @click="download">下载图片</NButton>
    </div>
  </div>
</template>
<style scoped>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  padding: 12px 5px;
  height: 340px;
  border-radius: 12px;
}
</style>
