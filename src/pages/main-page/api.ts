import { axios } from "../../shared";

export const getQuizzesAgent = () => {
    const getQuizzesList = async () => {
        return await axios({
            method: 'GET',
            url: '/quizzes',
        });
    };

    return {
        getQuizzesList,
    };
};
