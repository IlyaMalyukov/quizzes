import { useRoute } from 'vue-router';
import {onMounted, Ref, ref} from 'vue';
import type { Answer } from '@/widgets';
import { getQuizDataAgent } from '../api';
import { Quiz } from './types';

const useQuizPage = () => {
  const route = useRoute();

  const agent = getQuizDataAgent();

  const quizId = <string>route.query.id;

  const quiz: Ref<Quiz> = ref({});

  const currentQuestion = ref(0);

  onMounted(async () => {
    quiz.value = await agent.getQuizById(quizId);
  });

  const toAnswer = (answer: Answer) => {
    console.log(answer);
  };

  return {
    quiz,
    currentQuestion,
    toAnswer,
  }
};

export default useQuizPage;
