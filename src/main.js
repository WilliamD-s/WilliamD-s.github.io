import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

import router from './routes';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app');
