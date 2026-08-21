<template>
  <div class="page">
    <h1>🏠 首页</h1>
    <p>这是首页内容区域，通过路由动态渲染。</p>
    <div class="card">
      <h3>快速开始</h3>
      <p>欢迎使用 Vue 3 + TypeScript + Vue Router 构建的应用！</p>
    </div>
  </div>
</template>

<style scoped>
.page h1 {
  margin-bottom: 16px;
  font-size: 28px;
}

.card {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.card h3 {
  margin-bottom: 8px;
  color: #1890ff;
}
</style>
