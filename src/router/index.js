import { createRouter, createWebHistory } from 'vue-router'
import TaskIndex from "../components/TaskIndex.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: '/',
    name: 'videos',
    component: TaskIndex
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
