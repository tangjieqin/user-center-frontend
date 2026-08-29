<template>
  <div id="user-register-page">
    <h2 class="title">用户注册</h2>
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

    <a-form-item
      label="确认密码"
      name="checkPassword"
      :rules="[
        { required: true, message: '请输入确认密码' },
        { min: 8, message: '确认密码长度不能小于8位' },
      ]"
    >
      <a-input-password v-model:value="formState.checkPassword" placeholder="请输入确认密码" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 6, span: 20 }">
      <a-button type="primary" html-type="submit">注册</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { userRegister } from "@/api/user";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { reactive } from "vue";

interface FormState {
  username: string;
  userPassword: string;
  checkPassword: string;
}

const router = useRouter();

const formState = reactive<FormState>({
  username: "",
  userPassword: "",
  checkPassword: "",
});

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: FormState) => {
  // 判断两次输入的密码是否一致
  if (values.userPassword !== values.checkPassword) {
    message.error("两次输入的密码不一致");
    return;
  }
  const res = await userRegister(values);
  // 注册成功后，跳转登录页面
  if (res.data.code === 0 && res.data.data) {
    message.success("注册成功");
    // 登录之后做一个跳转
    router.push({
      path: "/user/register",
      replace: true,
    });
  } else {
    message.error("注册失败" + res.data.describtion);
  }
};
</script>

<style scoped>
#user-register-page .title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
