// import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router";
// import Router from 'vue-router'

import SideBar from "../components/SideBar.vue"
import Home from "../pages/Home.vue"
import Subscribe from "../components/Subscribe.vue"
import Footer from "../components/Footer.vue"
import Newsletter from "../components/Newsletter.vue"
import Item from "../components/Item.vue"
import Product from "../pages/Product.vue"


const routes = [
                     {
        
                        path: '/',
                        component: Home,
                        name: 'home'
                    },
                    {
        
                        path: '/product/:id',
                        component: Product,
                        name: 'product',
                        props: true
                    },
                    {
                        path: '/side-bar',
                        component: SideBar,
                        name:'side'
                    },
                    {
                        path: '/subscribe',
                        component: Subscribe,
                        name: 'subscribe'
                    },
                    {
                        path: '/footer',
                        component: Footer,
                        name: 'footer'
                    },
                    {
                        path: '/newsletter',
                        component: Newsletter,
                        name: 'newsletter'
                    },
                    {
                        path: '/item',
                        component: Item,
                        name: 'item'
                    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
// Vue.use(Router)

// const router = new Router({
//     routes: [
//         {
//             path: '/',
//             component: Home,
//             name: 'home'
//         },
//         {
//             path: '/side-bar',
//             component: SideBar,
//             name:'side'
//         },
//         {
//             path: '/subscribe',
//             component: Subscribe,
//             name: 'subscribe'
//         },
//         {
//             path: '/footer',
//             component: Footer,
//             name: 'footer'
//         },
//         {
//             path: '/newsletter',
//             component: Newsletter,
//             name: 'newsletter'
//         },
//         {
//             path: '/item',
//             component: Item,
//             name: 'item'
//         },
        
//     ]
// });

export default router;