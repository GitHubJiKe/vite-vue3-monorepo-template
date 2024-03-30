<script setup lang="ts">
import { inject, Ref } from 'vue';
import avatar from '../assets/avatar.jpeg'

const isDark = inject<Ref<boolean>>('isDark');
</script>
<template>
    <div class="px-12 flex flex-col h-100 justify-between  mx-auto my-0 w-200">
        <div class="text-12 w-full header-title" :class="`${isDark ? 'dark' : 'light'}`">
            个人介绍
            <label class="text-12 float-right relative top-3 resume">
                RESUME
            </label>
        </div>
        <div class="flex flex-1 flex-col">
            <div class="flex-1 mt-12 pl-8 pb-12">
                <div class="flex justify-between">
                    <div class="flex-1">
                        <div class="text-8">
                            基本信息
                        </div>
                        <div class="pl-4 pt-2">
                            <div class="text-5">
                                姓名：苑文娜
                            </div>
                            <div class="text-5 py-1">
                                手机：15838645950
                            </div>
                            <div class="text-5">
                                邮箱：2637853429@qq.com
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="text-8">
                            教育背景
                        </div>
                        <div class="pl-4 pt-2">
                            <div class="text-5">
                                学校：洛阳职业技术学院
                            </div>
                            <div class="text-5 py-1">
                                专业：计算机应用技术
                            </div>
                            <div class="text-5">
                                学历：大专
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 mt-12 pl-8 pb-12">
                <div class="flex justify-between">
                    <div class="flex-1">
                        <div class="text-8">
                            软件技能
                        </div>
                        <div class="flex gap-12 pt-4">
                            <div class="software" :class="`${isDark ? 'dark' : 'light'}`">AI </div>
                            <div class="software" :class="`${isDark ? 'dark' : 'light'}`">PS </div>
                            <div class="software" :class="`${isDark ? 'dark' : 'light'}`">ID </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="text-8">
                            专业技能
                        </div>
                        <div class="pl-4 pt-2">
                            <label class="text-5">
                                画册设计、
                            </label>
                            <label class="text-5">
                                Logo设计、
                            </label>
                            <label class="text-5">
                                VI设计、
                            </label>
                            <br>
                            <label class="text-5">
                                UI设计、
                            </label>
                            <label class="text-5">
                                字体设计、
                            </label>
                            <label class="text-5">
                                海报设计、
                            </label>
                            <br>
                            <label class="text-5">
                                包装设计
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 mt-12 pl-8 pb-12">
                <div class="flex flex-col h-full justify-between">
                    <div>
                        <div class="text-8">
                            关于我
                        </div>
                        <div class="pt-4 text-5">
                            <img :src="avatar" alt="avatar" class="intro rounded-50% float-left m-4 w-40 ml-0">
                            具备快速学习和适应新领域的能力，善于利用搜索引擎解决问题。热爱独立研究，专注且高效，具备较强的毅力。思维敏捷，同时具备设计与管理能力，能准确把握行业发展趋势。积极主动，待人亲和，具备灵活变通的日常生活方式，同时拥有较强的耐心和适应能力。
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
.software {
    border: 2px solid var(--primary-text-color);
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
}

.intro {
    shape-outside: circle(50%);
}
</style>