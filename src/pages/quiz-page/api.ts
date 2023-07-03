import { axios } from "@/shared";

export const getQuizDataAgent = () => {
    const getQuizById = async (id) => {
        return await axios({
            method: 'GET',
            url: '/quiz/' + id,
        })
    }

    return {
        getQuizById,
    };
};
