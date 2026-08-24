/*
import type 是 TypeScript 3.8+ 的语法，表示只导入类型，不会被打包进最终 JS 代码。
createRouter: 创建路由实例，是整个路由系统的入口
createWebHistory: 创建 HTML5 历史模式（地址栏没有 #，如 http://xxx.com/about）
RouteRecordRaw: TypeScript 类型，用来约束路由配置的格式（只用于类型检查，不生成 JS 代码）
*/

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserLoginAndRegisterView from '@/views/UserLoginAndRegisterView.vue'
import UserInformationView from'@/views/UserInformationView.vue'

/*
直接导入：import HomeView from '...'	打包进主文件（vendor.js）	页面加载时就下载
懒加载： () => import('...')	单独打包成独立文件	访问时才下载
*/
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',           // URL 路径
    name: 'home',
    component: HomeView, // 匹配到该路径后，要渲染的 Vue 组件,  首页：静态导入（秒开）
  },
  {
    path: '/user/login',
    name: '登录',
    component: UserLoginAndRegisterView,
  },
  {
    path: '/user/information',
    name: '个人信息',
    component: UserInformationView,     // 可静态可动态
  },
  {
    path: '/admin/userManage',
    name: '用户管理',
    component: () => import('@/views/UserAdminView.vue'), // 懒加载
  },
  {
    path: '/admin/userManageDetail/:id',
    name: '用户详细管理',
    component: () => import('@/views/UserAdminInformationView.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 通配符路由
    redirect: '/'              // 重定向到首页
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
