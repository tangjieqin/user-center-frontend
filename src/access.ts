import router from "@/router";
import { useLoginUserStore } from "@/stores/useLoginUserStore";
import { message } from "ant-design-vue";

// 全局权限校验
router.beforeEach(async (to, from, next) => {
  // 获取Pinia Store
  const loginUserStore = useLoginUserStore();
  const loginUser = loginUserStore.loginUser;

  // 等待用户信息加载完成
  if (!loginUser) {
    await loginUserStore.fetchLoginUser();
  }

  // 获取目标URL
  const targetUrl = to.fullPath;

  if (targetUrl.startsWith("/admin")) {
    if (!loginUser || loginUser.userRole !== 1) {
      message.error("您没有权限访问该页面");
      next("/user/login?redirect=${to.fullPath");
      return;
    }
  }
  next();
});
