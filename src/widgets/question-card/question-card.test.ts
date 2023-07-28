import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils';

import { QuestionCard } from './index';

describe('Question Card', () => {
  const wrapper = shallowMount(QuestionCard, {
    propsData: {
      question: {
        id: 0,
        title: 'Как дела?',
        img: 'https://i.ibb.co/myMkKBj/orbit.webp',
        answers: [
          { id: 0, title: 'Хорошо', points: 1 },
          { id: 1, title: 'Плохо', points: 0 },
        ],
      },
    },
  });

  test('mount component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Question Card has props "question"', () => {
    const props = wrapper.props();

    expect(props.question.id).toBe(0);
    expect(props.question.title).toBe('Как дела?');
    expect(props.question.img).toBe('https://i.ibb.co/myMkKBj/orbit.webp');
    expect(props.question.answers.length).toBe(2);
  });
});
