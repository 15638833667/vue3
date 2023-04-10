import { createRouter, createWebHistory } from 'vue-router';
import OptionsAPI from '../views/optionsAPI.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'optionsAPI',
      // component: OptionsAPI
      component: () => import('../views/optionsAPI.vue'),
    },
    {
      path: '/compositionAPI',
      name: 'compositionAPI',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/compositionAPI.vue'),
    },
  ],
});

export default router;
