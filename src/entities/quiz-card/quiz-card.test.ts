import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils';

import { QuizCard } from '@/entities';


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
        expect(wrapper.props().quiz.id).toBe(0);
        expect(wrapper.props().quiz.title).toBe('New super quiz');
    });
});
