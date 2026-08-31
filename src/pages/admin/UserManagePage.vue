<template>
  <div id="user-manage-page">
    <a-table :columns="columns" :data-source="data">
      <!-- 插入数据 -->
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'avatarUrl'">
          <img :src="text.avatarUrl" alt="avatar" style="width: 50px; height: 50px" />
        </template>
        <!-- 其他的 -->
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { searchUsers } from "@/api/user";
import { message } from "ant-design-vue";
import { ref } from "vue";

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "name",
  },
  {
    title: "账号",
    dataIndex: "userAccount",
  },
  {
    title: "头像",
    dataIndex: "avatarUrl",
  },
  {
    title: "性别",
    dataIndex: "gender",
  },
  {
    title: "手机号",
    dataIndex: "phone",
  },
  {
    title: "邮箱",
    dataIndex: "email",
  },
  {
    title: "状态",
    dataIndex: "userStatus",
  },
  {
    title: "用户角色",
    dataIndex: "userRole",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    dataIndex: "action",
  },
  {
    title: "更新时间",
    dataIndex: "updateTime",
  },
];

// 从后端获取数据
const data = ref([]);
const fetchData = async () => {
  const res = await searchUsers({});
  if (res.data.data) {
    data.value = res.data.data || [];
  } else {
    message.error("获取用户列表失败" + res.data.description);
  }
};

fetchData();
</script>
