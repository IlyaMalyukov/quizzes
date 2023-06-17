import { ref, onMounted } from 'vue'
import { useQuizzesStore } from "../../app/stores/quizzes";

export const useMainPage = () => {
    const isLoading = ref(true);

    const quizzesList = ref([]);

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
