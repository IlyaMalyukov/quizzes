import { describe, test, expect } from 'vitest';
import { shallowMount, mount, flushPromises } from '@vue/test-utils';

import { router } from '@/app/router';
import { QuizCard } from './index';


describe('Quiz Card', () => {
    const wrapper = shallowMount(QuizCard, {
        propsData: {
            quiz: { id: 0, title: 'New super quiz' }
        },
        attachToDocument: 'button',
    });

    test('mount component', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    test('Quiz Card has props "quiz"', () => {
        const props = wrapper.props();

        expect(props.quiz.id).toBe(0);
        expect(props.quiz.title).toBe('New super quiz');
    });

    // test('Router renders single quiz page when clicking a button', async () => {
    //     await router.push('/');
    //     await router.isReady();
    //
    //     const wrapper = mount(QuizCard, {
    //         global: {
    //             plugins: [router],
    //         },
    //         propsData: {
    //             quiz: { id: 0, title: 'New super quiz' }
    //         },
    //     });
    //
    //     expect(wrapper.html()).toMatch('Пройти квиз');
    //     await wrapper.find('a').trigger('click');
    //     await flushPromises();
    //     expect(wrapper.text()).not.toMatch('Пройти квиз');
    // });

    // test('123', async () => {
    //     await router.replace('/');
    //     await router.push('/quiz?id=0');
    //
    //     const wrapper = mount(QuizCard, {
    //         global: {
    //             plugins: [router],
    //         },
    //         propsData: {
    //             quiz: { id: 0, title: 'New super quiz' }
    //         },
    //     });
    //
    //     expect(wrapper.text()).not.toMatch('Пройти квиз');
    // });
});
