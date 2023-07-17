import { axios } from "@/shared";

export const getQuizDataAgent = () => {
    const getQuizById = async (id) => {
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
