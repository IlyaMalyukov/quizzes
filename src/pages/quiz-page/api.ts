import { axios } from '@/shared';
import { Quiz } from './lib/types';

export const getQuizDataAgent = () => {
    const getQuizById = async (id: string): Promise<Quiz> => {
        const { data } = await axios({
            method: 'GET',
            url: '/quiz/' + id,
        })

        return data.data;
    }

    return {
        getQuizById,
    };
};
