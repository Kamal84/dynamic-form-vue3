import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Apply from '@/views/apply/Apply.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/apply',
    name: 'Apply',
    component: Apply,
    children: [
      {
        path: '',
        name: 'PersonDetails',
        component: () => import('@/views/apply/PersonDetails.vue'),
        meta: {
          title: 'Tappily | Person Details',
          summary: '',
          pageHeading: 'Person Details',
        },
      },
      {
        path: 'work-details',
        name: 'WorkDetails',
        component: () => import('@/views/apply/WorkDetails.vue'),
        meta: {
          title: 'Tappily | Work Details',
          summary: '',
          pageHeading: 'Work details',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
