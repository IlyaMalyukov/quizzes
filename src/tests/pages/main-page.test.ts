import { beforeEach, describe, expect, test } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';

import { useMainPage } from '@/pages/main-page'


describe('Main Page', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test('Expected list to be defined', () => {
        const { quizzesList } = useMainPage();

        expect(quizzesList).toBeDefined();
    });
});
