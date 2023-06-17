import { defineStore } from "pinia";
import { ref } from "vue";
import { axios } from "../../shared";

export const useQuizzesStore = defineStore('quizzes', () => {
    const list = ref([]);

    const getQuizzesList = async () => {
        const res = await axios({
            method: 'GET',
            url: '/quizzes',
        });

        list.value = res.data.content;
    }

    return {
        list,
        getQuizzesList,
    };
})
