import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import TheFeedback from "@/components/main/TheFeedback.vue";
import TheDentistry from "@/pages/TheDentistry.vue";
import PlasticSurgery from "@/pages/PlasticSurgery.vue";
import BreastEnlargement from "@/pages/BreastEnlargement.vue";
import TheLiposuction from "@/pages/TheLiposuction.vue";

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
    {
      path: '/plastic-surgery',
      name: 'plastic-surgery',
      component: PlasticSurgery
    },
    {
      path: '/breast-enlargement',
      name: 'breast-enlargement',
      component: BreastEnlargement
    },
    {
      path: '/liposuction',
      name: 'liposuction',
      component: TheLiposuction
    },

  ]
})

export default router
