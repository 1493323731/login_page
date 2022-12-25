import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path:'/',redirect: "/loginandregister"},
  {
    path:'/loginandregister',
    name:'LoginAndRegister',
    component:()=>import('../views/LoginAndRegister.vue')
  },
  {
    path:'/forgotpassword',
    name:'ForgotPassword',
    component:()=>import('../views/ForgotPassword.vue')
  },
  {
    path:'/resetpassword',
    name:'ResetPassword',
    component:()=>import('../views/ResetPassword.vue')
  },
  {
    path:'/:catchAll(.*)',
    component:()=>import('../views/404.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
