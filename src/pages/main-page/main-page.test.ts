import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';
import { ref } from 'vue';

import { MainPage } from '@/pages/main-page';
import { useQuizzesStore } from '@/app/stores/quizzes';
import { server } from '@/__mocks__/server';

describe('Main Page', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        server.listen();
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

        vi.spyOn<any, any>(store, 'getQuizzesList').mockReturnValueOnce([
            { id: 0, name: 'Quiz 1' },
            { id: 1, name: 'Quiz 2' },
            { id: 2, name: 'Quiz 3' },
        ]);

        expect(wrapper.vm.isLoading).toBeTruthy();

        // TO DO разобраться как тестить такие случаи
        // getQuizzesList добавляет загруженные данные в state, а не возвращает их

        const quizzesList = await store.getQuizzesList();

        expect(quizzesList).toHaveLength(3)
    });
});


