import { defineStore } from 'pinia';
import {Ref, ref} from 'vue';
import { getQuizzesAgent } from '../../../pages/main-page';

import type { QuizzesList } from './types';

export const useQuizzesStore = defineStore('quizzes', () => {
    const list: Ref<QuizzesList> = ref([]);

    const getQuizzesList = async () => {
        const agent = getQuizzesAgent();

        const res = await agent.getQuizzesList();

        list.value = res.data.content;
    };

    return {
        list,
        getQuizzesList,
    };
})
