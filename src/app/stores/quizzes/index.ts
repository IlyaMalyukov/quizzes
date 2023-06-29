import { defineStore } from 'pinia';
import {Ref, ref} from 'vue';
import { getQuizzesAgent } from '../../../pages/main-page';

import type { QuizzesList } from './types';

export const useQuizzesStore = defineStore('quizzes', () => {
    const list: Ref<QuizzesList> = ref([]);

    const getQuizzesList = async () => {
        const agent = getQuizzesAgent();

        try {
            const { data } = await agent.getQuizzesList();

            list.value = data.content;
        } catch (err) {
            console.log(err);
        }
    };

    return {
        list,
        getQuizzesList,
    };
})
