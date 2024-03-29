import Vue from 'vue'
import VueRouter from 'vue-router'
import Button from '../views/Button.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Button',
    component: Button
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
