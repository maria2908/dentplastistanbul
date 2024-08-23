import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import TheFeedback from "@/components/TheMain/TheFeedback.vue";
import TheDentistry from "@/pages/TheDentistry.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/',
      name: 'feedback',
      component: TheFeedback
    },
    {
      path: '/dentistry',
      name: 'dentistry',
      component: TheDentistry
    },

  ]
})

export default router
