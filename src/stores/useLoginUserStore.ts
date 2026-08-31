import { getCurrentUser } from "@/api/user";
import { defineStore } from "pinia"; // 1. 引入 defineStore
import { ref } from "vue"; // 2. 引入 Vue 的响应式 API

// 1. 定义登录用户的类型接口
interface LoginUser {
  id?: number; // 可选属性，根据后端返回决定
  username: string; // 必填属性
  avatar?: string; // 可选属性
  userRole?: number; // 可选属性
  // 如果后端还有其他字段，继续在此添加即可
}

// 已登录用于信息：登录后在页面右上角显示
// 3. 定义并导出 Store
export const useLoginUserStore = defineStore("loginUser", () => {
  // 定义数据 (相当于 data):定义一个初始值
  const loginUser = ref<LoginUser>({
    username: "未登录", // 默认值
  });

  // 远程或更新用户信息
  async function fetchLoginUser() {
    // 调用之前写的请求
    const res = await getCurrentUser();
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data;
    }

    /* // 模拟网络请求
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 模拟后端返回的用户信息
    loginUser.value = {
      id: 1,
      username: "admin",
    }; */
  }

  // 单独设置这个信息
  function setLoginUser(newLoginUser: LoginUser) {
    loginUser.value = newLoginUser;
  }

  function setToken(token: string) {
    localStorage.setItem("token", token);
  }

  // 4. 将需要暴露的内容返回
  return { loginUser, fetchLoginUser, setLoginUser, setToken };
});
