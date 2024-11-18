import { createWebHistory, createRouter } from 'vue-router';


import Appmain from '../components/Appmain.vue'


const routes = [
  { path: '/', component: Appmain },
  { path: '/about', component: AppAbout },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router};