import { defineStore } from 'pinia';
import { AppRoute } from '@/types/index';

const routeObj = {
  acceptTerms: {
    path: '',
    name: 'acceptTerms',
    component: () => import('@/components/BaseForm.vue'),
    meta: {
      title: 'Tappily | Accept Terms & Conditions',
      summary: '',
      pageHeading: 'Accept Terms & Conditions',
    },
  },
  personDetails: {
    path: 'person-details',
    name: 'personDetails',
    component: () => import('@/components/BaseForm.vue'),
    meta: {
      title: 'Tappily | Person Details',
      summary: '',
      pageHeading: 'Person Details',
    },
  },
  yourAddress: {
    path: 'your-address',
    name: 'yourAddress',
    component: () => import('@/components/BaseForm.vue'),
    meta: {
      title: 'Tappily | Your Address',
      summary: '',
      pageHeading: 'Your Address',
    },
  },
  yourIncome: {
    path: 'your-income',
    name: 'yourIncome',
    component: () => import('@/components/BaseForm.vue'),
    meta: {
      title: 'Tappily | Your Income',
      summary: '',
      pageHeading: 'Your Income',
    },
  },
  yourBank: {
    path: 'your-bank',
    name: 'yourBank',
    component: () => import('@/components/BaseForm.vue'),
    meta: {
      title: 'Tappily | Your Bank',
      summary: '',
      pageHeading: 'Your Bank',
    },
  },
};
interface appRoute {
  appRoute: AppRoute[];
}

export const useAppRoute = defineStore('appRoute', {
  state: (): appRoute => ({
    appRoute: [] as AppRoute[],
  }),
  getters: {
    createAppRoute: (state) => {
      const obj = Object.values(state.appRoute).reduce((acc, key) => {
        acc[key] = routeObj[key];
        return acc;
      }, {});
      const newRoute = Object.values(obj);
      return newRoute;
    },
  },
  actions: {
    givenRoutes(val: any) {
      this.appRoute = val;
    },
  },
});
