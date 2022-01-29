import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Apply from '@/views/Apply.vue';

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
        name: 'acceptTerms',
        component: () => import('@/components/BaseForm.vue'),
        meta: {
          title: 'Tappily | Accept Terms & Conditions',
          summary: '',
          pageHeading: 'Accept Terms & Conditions',
        },
      },
      {
        path: 'person-details',
        name: 'personDetails',
        component: () => import('@/components/BaseForm.vue'),
        meta: {
          title: 'Tappily | Person Details',
          summary: '',
          pageHeading: 'Person Details',
        },
      },
      {
        path: 'your-address',
        name: 'yourAddress',
        component: () => import('@/components/BaseForm.vue'),
        meta: {
          title: 'Tappily | Your Address',
          summary: '',
          pageHeading: 'Your Address',
        },
      },
      {
        path: 'your-income',
        name: 'yourIncome',
        component: () => import('@/components/BaseForm.vue'),
        meta: {
          title: 'Tappily | Your Income',
          summary: '',
          pageHeading: 'Your Income',
        },
      },
      {
        path: 'your-bank',
        name: 'yourBank',
        component: () => import('@/components/BaseForm.vue'),
        meta: {
          title: 'Tappily | Your Bank',
          summary: '',
          pageHeading: 'Your Bank',
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
