import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import WwV3UI from 'ww-v3-ui';
import 'ww-v3-ui/ww-v3-ui/style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import mitt from 'mitt';
const $bus = mitt();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(WwV3UI);

app.mount('#app');
app.config.globalProperties.$Bus = $bus;
