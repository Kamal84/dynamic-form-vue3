import { defineStore } from 'pinia';

interface appRoute {}

export const useGqlstore = defineStore('appRoute', {
  state: (): appRoute => ({}),
  actions: {},
});
