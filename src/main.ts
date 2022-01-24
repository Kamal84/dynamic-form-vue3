import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';
import './assets/css/index.css';

const app = createApp(App).use(router);
app.mount('#app');
