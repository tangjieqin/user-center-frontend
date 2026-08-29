<template>
  <div id="user-login-page">
    <h2 class="title">用户登录</h2>
  </div>
  <a-form
    style="max-width: 300px; margin: 0 auto"
    :model="formState"
    name="basic"
    label-align="left"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
    @finish="handleSubmit"
  >
    <a-form-item label="账号" name="username" :rules="[{ required: true, message: '请输入账号' }]">
      <a-input v-model:value="formState.username" placeholder="请输入账号" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="userPassword"
      :rules="[
        { required: true, message: '请输入密码' },
        { min: 8, message: '密码长度不能小于8位' },
      ]"
    >
      <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 6, span: 20 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { userLogin } from "@/api/user";
import { useRouter } from "vue-router";
import { useLoginUserStore } from "@/stores/useLoginUserStore";
import { message } from "ant-design-vue";
import { reactive } from "vue";

interface FormState {
  username: string;
  userPassword: string;
}

const router = useRouter();

const formState = reactive<FormState>({
  username: "",
  userPassword: "",
});

const loginUserStore = useLoginUserStore();

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: FormState) => {
  const res = await userLogin(values);
  // 登录成功后，将token存储到全局状态中
  if (res.code === 0 && res.data) {
    loginUserStore.setToken(res.data.token);
    await loginUserStore.fetchLoginUser();
    message.success("登录成功");
    // 登录之后做一个跳转
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败");
  }
};
</script>

<style scoped>
#user-login-page .title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
