import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { MainPage } from '@/pages/main-page';
import { QuizPage } from '@/pages/quiz-page';
import {ROUTES} from '@/shared/constants';

const routes: RouteRecordRaw[] = [
    {
        path: ROUTES.MAIN_PAGE.PATH,
        name: ROUTES.MAIN_PAGE.NAME,
        component: MainPage,
    },
    {
        path: ROUTES.QUIZ_PAGE.PATH,
        name: ROUTES.QUIZ_PAGE.NAME,
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
