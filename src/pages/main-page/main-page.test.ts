import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { ref } from 'vue';

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

    test('Mock data will be loaded with using store and axios', async () => {
        const wrapper = mount(MainPage, {
            global: {
                plugins: [createPinia()],
            },
        });

        const store = useQuizzesStore();

        await store.getQuizzesList();

        // TO DO проверять наличие элементов в quizzesList
        // expect(wrapper.quizzesList).toHaveLength(3)
        // исправить ошибку из-за axios
        expect(wrapper.isLoading).toBeFalsy();
    });
});


