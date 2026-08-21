<template>
  <div id="globalHeader">
    <!-- 使用栅格布局 -->
    <a-row>
      <!-- logo标题设置 -->
      <a-col flex="200px">
        <div class="title-bar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">这是我的中心</div>
        </div>
      </a-col>
      <!-- 菜单栏 -->
      <!--
        a-menu：Ant Design Vue 的菜单组件
        v-model:selectedKeys="current"：Vue框架的双向绑定，核心作用就是控制菜单高亮
          v-model: —— 双向绑定的标记
          selectedKeys —— 组件定义的 prop 名称
          "current" —— 绑定的数据
        :items:把菜单数据传给 Menu 组件
       -->
      <a-col flex="auto">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
      </a-col>

      <!-- 登录按钮 -->
      <a-col flex="80">
        <div class="user-login-status">
          <a-button type="primary" href="/user/login">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<!--
h函数：渲染函数，用来在 JS 中创建虚拟 DOM 节点
ref函数：创建响应式数据，数据变化时界面自动更新
-->
<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined, CrownOutlined } from '@ant-design/icons-vue'
import { type MenuProps } from 'ant-design-vue'
const current = ref<string[]>(['/']) // 临时存储当前选中状态，默认选中 key 为 主页 的菜单
const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/user/login',
    label: '用户登录',
    title: '用户登录',
  },
  {
    key: '/admin/userManager',
    icon: () => h(CrownOutlined),
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://antdv.com', target: '_blank' }, 'UI 组件库'),
    title: 'UI 组件库',
  },
])
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.title {
  color: black;
  font-size: 18;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
