import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import { QuizPage } from './index';

describe('Question Card', () => {
  const wrapper = mount(QuizPage);

  test('Mount component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Current question and points should be changed after answer', () => {
    expect(wrapper.vm.currentQuestionIndex).toBe(0);
    expect(wrapper.vm.points).toBe(0);

    wrapper.vm.toAnswer({ id: 0, value: 'Ответ', points: 1 });

    expect(wrapper.vm.currentQuestionIndex).toBe(1);
    expect(wrapper.vm.points).toBe(1);
  });
});
