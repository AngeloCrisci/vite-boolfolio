import { createApp } from 'vue';
import 'bootstrap/scss/bootstrap.scss';
import {router} from './rotuer';



import App from '../App.vue';

createApp(App)
.use(router)
.mount('#app')
