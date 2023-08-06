import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import { QuizCard } from './index';


describe('Quiz Card', () => {
    const routes = [
        { path: '/quiz', name: 'quiz-page', component: { template: '<div>Пройти квиз</div>' }, },
    ];

    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

    const wrapper = mount(QuizCard, {
        global: { plugins: [router] },
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

    test('Render router-link to "Пройти квиз" with query "id" === 0', async () => {
        const link = wrapper.find('a');

        expect(link.text()).toBe('Пройти квиз');

        await router.push({ name: 'quiz-page', query: { id: 0 } });

        expect(link.attributes('href')).toBe('/quiz?id=0');
    });
});
