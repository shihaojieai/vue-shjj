import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入login组件
import Login from '../components/login.vue'

Vue.use(VueRouter)

// routes 定义路由规则数组
const routes = [
  // 路由重定向 默认进入网页的第一个页面
  {path:'/',redirect:'/login'},
  //path指的是路由规则对应hash地址
  // component指的是路由规则对应的组件
  {path:'/login',component:Login}
]
// 创建路由实例对象
const router = new VueRouter({
  routes
})

// 向外导出路由
export default router
