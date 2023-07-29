import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import { QuizCard } from './index';


describe('Quiz Card', () => {
    const wrapper = shallowMount(QuizCard, {
        propsData: {
            quiz: { id: 0, title: 'New super quiz' }
        },
    });

    test('Mount component', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    test('Quiz Card has props "quiz"', () => {
        const props = wrapper.props();

        expect(props.quiz.id).toBe(0);
        expect(props.quiz.title).toBe('New super quiz');
    });
});
