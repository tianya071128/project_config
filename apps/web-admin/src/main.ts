import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { test } from '@wzb/utils';

console.debug(test);

createApp(App).mount('#app');
