import myAxios from "@/request";

/**
 * 用户注册
 * @param param
 */
export const userRegister = async (params: any) => {
    return myAxios.request({
        url: "/api/user/register",
        method: "POST",
        data: params,
    })
}

/**
 * 用户登录
 * @param param 
 * @returns 
 */
export const userLogin = async (param: any) => {
    return myAxios.request({
        url: "/api/user/login",
        method: "POST",
        data: param,
    })
}

/**
 * 用户注销
 */
export const userLogout = async () => {
    return myAxios.request({
        url: "/api/user/logout",
        method: "GET",
    })

}

/**
 * 获取当前用户
 * @returns 
 */
export const getCurrentUser = async () => {
    return myAxios.request({
        url: "/api/user/current",
        method: "GET",
    })
}

/**
 * 获取用户列表
 * @param param 
 * @returns 
 */
export const searchUsers = async (param: any) => {
    return myAxios.request({
        url: "/api/user/search",
        method: "POST",
        data: param,
    })
}

/**
 * 更新用户
 * @param param 
 * @returns 
 */
export const updateUser = async (param: any) => {
    return myAxios.request({
        url: "/api/user/update",
        method: "POST",
        data: param,
    })

}

/**
 * 管理员更新用户
 * @param param 
 * @returns 
 */
export const updateUserAdmin = async (param: any) => {
    return myAxios.request({
        url: "/api/user/updateAdmin",
        method: "POST",
        data: param,
    })
}

export const deleteUser = async (id: number) => {
    return myAxios.request({
        url: "/api/user/delete?id=" + id,
        method: "GET",
    })
}

