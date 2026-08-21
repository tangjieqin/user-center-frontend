<template>
  <div id="basicLayout">
    <a-layout>
      <!-- 头部： -->
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>

      <!-- 中间：使用路由动态切换（动态渲染） -->
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <!-- 底部：固定 -->
      <a-layout-footer class="footer">
        <a href="https:baidu.com" target="_blank"> 这里是百度网站 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '../components/GlobalHeader.vue'
</script>

<style scoped>
/* 底部栏设置 */
#basicLayout .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

/* 内容区 */
#basicLayout .content {
  /* 浏览器的 Flex 布局在计算 flex: 1 时，可能会产生亚像素误差（sub-pixel rendering），导致底部有 1-2px 的间隙或被遮住。  */
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
}

#basicLayout .header {
  background: white;
  margin-bottom: 10px;
}
</style>
