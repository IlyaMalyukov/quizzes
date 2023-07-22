import { useRoute } from 'vue-router';
import {onMounted, Ref, ref} from 'vue';
import { getQuizDataAgent } from '../api';
import { Quiz } from './types';

const useQuizPage = () => {
  const route = useRoute();

  const agent = getQuizDataAgent();

  const quizId = route.query.id;

  const quiz: Ref<Quiz> = ref({});

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
