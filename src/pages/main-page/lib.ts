import { ref, onMounted, Ref } from 'vue';
import { useQuizzesStore } from '@/app/stores/quizzes';

import type { QuizzesList } from '@/app/stores/quizzes/types';

const useMainPage = () => {
    const isLoading = ref(true);

    const quizzesStore = useQuizzesStore();

    const loadQuizzes = async () => await quizzesStore.getQuizzesList();

    onMounted(async () => {
        await loadQuizzes();
        isLoading.value = false;
    });

    const quizzesList: QuizzesList = quizzesStore.list;

    return {
        isLoading,
        quizzesList,
        loadQuizzes,
    };
};

export default useMainPage;
