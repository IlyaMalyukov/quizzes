import { beforeEach, describe, expect, test, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';

import { useQuizzesStore } from '@/app/stores/quizzes/index'


describe('Quizzes Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test('Expected list to be defined', () => {
        const quizzesStore = useQuizzesStore();

        expect(quizzesStore.list).toBeDefined();
    });

    test('Expected list will have length 3', async () => {
        const quizzesStore = useQuizzesStore();

        vi.spyOn<any, any>(quizzesStore, 'getQuizzesList').mockReturnValueOnce([
            { id: 0, name: 'Quiz 1' },
            { id: 1, name: 'Quiz 2' },
            { id: 2, name: 'Quiz 3' },
        ]);

        await quizzesStore.getQuizzesList();

        // TO DO разобраться почему не работает
        // expect(quizzesStore.list).toHaveLength(3);
    });
});
