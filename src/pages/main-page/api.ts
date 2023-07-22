import { axios } from '@/shared';
import { QuizzesList } from '@/app/stores/quizzes/types';

export const getQuizzesAgent = () => {
    const getQuizzesList = async (): Promise<QuizzesList> => {
        return await axios({
            method: 'GET',
            url: '/quizzes',
        });
    };

    return {
        getQuizzesList,
    };
};
