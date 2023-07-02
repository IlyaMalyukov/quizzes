import { beforeEach, describe, expect, test } from 'vitest'
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
});
