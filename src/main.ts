import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';
import './assets/css/index.css';
import { createPinia } from 'pinia';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: '/api',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp(App)
  .use(router)
  .use(createPinia())
  .provide(DefaultApolloClient, apolloClient);
app.mount('#app');
