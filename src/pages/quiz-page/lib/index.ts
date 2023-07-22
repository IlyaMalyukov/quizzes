import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getQuizDataAgent } from '@/pages/quiz-page/api';

const useQuizPage = () => {
  const route = useRoute();

  const agent = getQuizDataAgent();

  const quizId = route.query.id;

  const quiz = ref({});

  const currentQuestion = ref(0);

  onMounted(async () => {
    quiz.value = await agent.getQuizById(quizId);
  });

  return {
    quiz,
    currentQuestion,
  }
};

export default useQuizPage;
