import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 首页路由
import Index from "../pages/Index.vue";
// 分类页路由
import Category from "../pages/Category.vue";
// 订单页路由
import Order from "../pages/Order.vue";
// 我的页路由
import Mine from "../pages/Mine.vue";
// 列表页路由
import List from "../pages/List.vue";
// 详情页路由
import Details from "../pages/Details.vue";
// 登录页路由
import Login from "../pages/Login.vue";
// 注册页路由
import Register from "../pages/Register.vue";
// 确认提交页路由
import Commit from "../pages/Commit.vue";

//配置路由
const routes = [
    //重定向路由
    {
        path: '/',
        redirect: '/index'
    },
    //设置路由
    { path: '/index',component: Index},
    { path: '/category',component: Category},
    { path: '/order',component: Order},
    { path: '/mine',component: Mine},
    { path: '/list',component: List},
    { path: '/details/:id',component: Details},
    { path: '/login',component: Login},
    { path: '/register',component: Register},
    { path: '/commit',component: Commit}
]

//实例化路由
const router = new VueRouter({
    routes
})

export default router