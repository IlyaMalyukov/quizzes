import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { MainPage } from '@/pages/main-page';
import { QuizPage } from '@/pages/quiz-page';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'main-page',
        component: MainPage,
    },
    {
        path: '/quiz',
        name: 'quiz-page',
        component: QuizPage,
    },

    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'not-found',
    //     // TO DO добавить страницу 404
    //     component: () => import('@/pages/not-found'),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
