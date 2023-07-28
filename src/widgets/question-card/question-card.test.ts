import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils';

import { QuestionCard } from './index';

describe('Question Card', () => {
  const wrapper = mount(QuestionCard, {
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

  test('Select answer should has value', () => {
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    expect(wrapper.vm.selectedAnswerId).toBe(undefined);

    input.trigger('change');
    button.trigger('click');

    expect(wrapper.vm.selectedAnswerId).toBe(1);

    expect(wrapper.vm.selectedAnswer.title).toBe('Плохо');
  });
});
