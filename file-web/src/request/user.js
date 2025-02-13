import { get, post } from "./http";

// 登录接口
export const login = (p) => get("/user/login", p);

// 注册接口
export const addUser = (p) => post("/user/register", p);