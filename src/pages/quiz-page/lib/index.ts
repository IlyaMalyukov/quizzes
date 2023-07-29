import { useRoute } from 'vue-router';
import {onMounted, Ref, ref} from 'vue';
import { ERRORS } from '@/shared';
import type { Answer } from '@/widgets';
import { getQuizDataAgent } from '../api';
import { Quiz } from './types';

const useQuizPage = () => {
  const route = useRoute();

  const agent = getQuizDataAgent();

  const quizId = <string>route?.query?.id;

  const quiz: Ref<Quiz> = ref({});

  const currentQuestionIndex = ref(0);

  const points = ref(0);

  const totalQuestions = ref(0);

  const error = ref('');

  const getQuiz = async () => {
    try {
      quiz.value = await agent.getQuizById(quizId);

      totalQuestions.value = quiz.value.questions.length;
    } catch (err) {
      error.value = ERRORS.LOAD_QUIZ;
    }
  };

  onMounted(async () => {
    await getQuiz();
  });

  const toAnswer = (answer: Answer) => {
    currentQuestionIndex.value += 1;
    points.value += answer.points;
  };

  return {
    quiz,
    currentQuestionIndex,
    points,
    totalQuestions,
    error,
    toAnswer,
  }
};

export default useQuizPage;
