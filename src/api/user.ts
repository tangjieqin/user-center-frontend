import myAxios from "@/request";

// 定义输入参数类型
interface UserLogin {
  username: string;
  userPassword: string;
}

interface UserRegister {
  username: string;
  userPassword: string;
  checkPassword: string;
}

interface UserSearch {
  username?: string;
  [key: string]: unknown;
}

interface UserType {
  id?: number;
  username?: string;
  userAccount?: string;
  avatarUrl?: string;
  gender?: number;
  phone?: string;
  email?: string;
  userRole?: number;
  [key: string]: unknown;
}

// 1. 定义后端统一响应体泛型接口
interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

// 2. 定义登录成功的业务数据类型
interface LoginResult {
  token: string;
}

/**
 * 用户注册
 * @param param
 */
export const userRegister = async (params: UserRegister) => {
  return myAxios.request({
    url: "/api/user/register",
    method: "POST",
    data: params,
  });
};

/**
 * 用户登录
 * @param param
 * @returns
 */
export const userLogin = async (param: UserLogin): Promise<ApiResponse<LoginResult>> => {
  return myAxios.request({
    url: "/api/user/login",
    method: "POST",
    data: param,
  });
  /*  // mock数据
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param.username === "admin" && param.userPassword === "12345678") {
        resolve({
          code: 0,
          message: "登录成功",
          data: {
            token: "mock-token-123456",
          },
        });
      } else {
        reject(new Error("用户名或密码错误"));
      }
    }, 500);
  }); */
};

/**
 * 用户注销
 */
export const userLogout = async () => {
  return myAxios.request({
    url: "/api/user/logout",
    method: "GET",
  });
};

/**
 * 获取当前用户
 * @returns
 */
export const getCurrentUser = async () => {
  return myAxios.request({
    url: "/api/user/current",
    method: "GET",
  });
};

/**
 * 获取用户列表
 * @param param
 * @returns
 */
export const searchUsers = async (param: UserSearch) => {
  return myAxios.request({
    url: "/api/user/search",
    method: "POST",
    data: param,
  });
};

/**
 * 更新用户
 * @param param
 * @returns
 */
export const updateUser = async (param: UserType) => {
  return myAxios.request({
    url: "/api/user/update",
    method: "POST",
    data: param,
  });
};

/**
 * 管理员更新用户
 * @param param
 * @returns
 */
export const updateUserAdmin = async (param: UserType) => {
  return myAxios.request({
    url: "/api/user/updateAdmin",
    method: "POST",
    data: param,
  });
};

export const deleteUser = async (id: number) => {
  return myAxios.request({
    url: "/api/user/delete?id=" + id,
    method: "GET",
  });
};
