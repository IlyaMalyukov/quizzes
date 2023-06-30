import {describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils';

import { QuizCard } from '../widgets';


describe('Quiz Card', () => {
    test('renders properly', () => {
        const wrapper = mount(QuizCard, {
            props: {
                quiz: { id: 0, title: 'Заголовок' }
            },
        });

        expect(wrapper.text()).toContain('Заголовок');
    })
});
