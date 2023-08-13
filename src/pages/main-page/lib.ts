import { ref, onMounted, Ref } from 'vue';
import { useQuizzesStore } from '@/app/stores/quizzes';

import type { QuizzesList } from '@/app/stores/quizzes/types';

const useMainPage = () => {
    const isLoading = ref(true);

    const quizzesStore = useQuizzesStore();

    const loadQuizzes = async () => await quizzesStore.getQuizzesList();

    const quizzesList: Ref<QuizzesList> = ref([]);

    onMounted(async () => {
        await loadQuizzes();
        quizzesList.value  = quizzesStore.list;
        isLoading.value = false;
    });

    return {
        isLoading,
        quizzesList,
        loadQuizzes,
    };
};

export default useMainPage;
