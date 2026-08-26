<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout.vue";
import { useLoginUserStore } from "./stores/useLoginUserStore.ts";
const loginUserStore = useLoginUserStore(); // 获取 Store 的响应式实例
// 自动将结果更新到 Store 的loginUser状态中,后续无需在此再次调用 fetchLoginUser()，因为 App.vue 已经全局触发过
loginUserStore.fetchLoginUser();
</script>

<style scoped></style>
