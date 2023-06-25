import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getQuizzesAgent } from '../../pages/main-page';

export const useQuizzesStore = defineStore('quizzes', () => {
    const list = ref([]);

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
