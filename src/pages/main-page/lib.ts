import { ref } from 'vue'

export const useMainPage = () => {
    const count = ref(0);

    return {
        count,
    };
};
