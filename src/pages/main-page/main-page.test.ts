import { beforeEach, describe, expect, test, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { ref } from 'vue';
import { createPinia, setActivePinia } from 'pinia';

import { MainPage } from '@/pages/main-page';
import { useQuizzesStore } from '@/app/stores/quizzes';
import { createTestingPinia } from '@pinia/testing';

describe('Main Page', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test('Main Page renders title correctly', () => {
        const wrapper = shallowMount(MainPage);

        expect(wrapper.text()).toContain('Квизы');
    });

    test('Expected action "getQuizzesList" have been called without params', () => {
        const wrapper = shallowMount(MainPage, {
            global: {
                plugins: [createTestingPinia({
                    initialState: {
                        list: ref([]),
                    },
                    createSpy: vi.fn,
                })],
            },
        });

        const store = useQuizzesStore();

        expect(store.getQuizzesList).toHaveBeenCalledTimes(1);
        expect(store.getQuizzesList).toHaveBeenLastCalledWith();
    });
});


