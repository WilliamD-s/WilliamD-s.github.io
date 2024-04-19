import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/components/GenericView.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/Home/Home.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/About/About.vue')
            },
        ]
    },
    {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/Tools/Tools.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;