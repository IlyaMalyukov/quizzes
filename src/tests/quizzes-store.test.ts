import { beforeEach, describe, expect, test } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';

import { useQuizzesStore } from '../app/stores/quizzes'


describe('Quizzes Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test('Expected array of quizzes', async () => {
        const quizzesStore = useQuizzesStore();

        expect(quizzesStore.list.length).toBeDefined();
    });
});
