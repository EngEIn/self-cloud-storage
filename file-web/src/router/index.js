import Vue from "vue";
import VueRouter from "vue-router"; //  引入vue-router模块
import Home from "../views/Home.vue"; //  引入Home页面对应的文件

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login", //  登录页面
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register", //  注册页面
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "*", //  404页面
    name: "Error_404",
    component: () =>
      import(/* webpackChunkName: "error_404" */ "../views/Error_404.vue"),
  },
]

// 创建路由实例
const router = new VueRouter({
  mode: "history", //  HTML5 History 模式
  base: process.env.BASE_URL,
  routes,
});

export default router
