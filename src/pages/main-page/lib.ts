import { ref, onMounted, Ref } from 'vue';
import { useQuizzesStore } from '@/app/stores/quizzes';

import type { QuizzesList } from '@/app/stores/quizzes/types';

const useMainPage = () => {
    const isLoading = ref(true);

    const quizzesList: Ref<QuizzesList> = ref([]);

    const quizzesStore = useQuizzesStore();

    const loadQuizzes = async () => await quizzesStore.getQuizzesList();

    onMounted(async () => {
        await loadQuizzes();
        quizzesList.value = quizzesStore.list;
        setTimeout(() => isLoading.value = false, 1000);
    });

    return {
        isLoading,
        quizzesList,
        loadQuizzes,
    };
};

export default useMainPage;
