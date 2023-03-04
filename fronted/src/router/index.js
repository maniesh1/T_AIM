import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import HomeView from '../views/HomeView.vue'
import HeatWave from '@/components/HeatWave'
import AQI from '@/components/AQI'
import About from '@/components/About'
import FAQs from '@/components/FAQs'

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
    component: About
    
  },
  {
    path: '/heat-wave',
    component: HeatWave
  },
  {
    path: '/aqi',
    component: AQI
  },
  {
    path: '/faq',
    component: FAQs
  }
]

const router = new VueRouter({
  routes
})

export default router
