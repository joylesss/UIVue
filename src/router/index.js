import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Page/Home'
import Contact from '../views/Page/Contact'
import SignIn from '../views/Page/Login'
import Dashboard from "../views/Page/Dashboard";

import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            if (!store.getters['authenticated']) {
                return next({
                    name: 'login',
                })
            }

            next();
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/login',
        name: 'login',
        component: SignIn
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
