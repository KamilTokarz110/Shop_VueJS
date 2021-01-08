import { createApp } from 'vue';
// import Vue from 'vue';
import App from './App.vue';
// import store from './store'
// import VueRouter from 'vue-router';

import router from './router'
// import routes from "./routes";

// Vue.use(VueRouter);

// export const router = new VueRouter({
//     routes : routes,
//     // mode: 'history'
// });


// Vue.config.productionTip = false;


createApp(App).use(router).mount('#app')

// new Vue({
//  router,
//  render: h => h(App)

// }) .$mount('#app')
