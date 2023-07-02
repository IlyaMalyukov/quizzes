import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils';

import { QuizCard } from '@/widgets';


describe('Quiz Card', () => {
    const wrapper = mount(QuizCard, {
        props: {
            quiz: { id: 0, title: 'Title' }
        }
    });

    test('mount component', async () => {
        expect(QuizCard).toBeTruthy();
    });

        expect(wrapper.text()).toContain('Заголовок');
    })
});
