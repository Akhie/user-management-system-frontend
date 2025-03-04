import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';

const routes =  [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/signup',
        name:'signup',
        component: SignUp,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

