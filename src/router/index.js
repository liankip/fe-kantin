import {createRouter, createWebHistory} from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'

import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: '/food-detail/:id',
            name: 'food-detail',
            component: FoodDetailView,
            props: true
        }
    ]
})

export default router
