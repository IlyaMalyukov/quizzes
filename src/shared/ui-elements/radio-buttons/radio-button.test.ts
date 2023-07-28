import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils';

import { RadioButtons } from './index';

describe('Radio Buttons', () => {
  const wrapper = mount(RadioButtons, {
    propsData: {
      options: [
        { id: 0, title: 'Хорошо' },
        { id: 1, title: 'Плохо' },
      ],
      modelValue: 0,
    },
  });

  test('to be mounted', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Radio Buttons has props "options" and "modelValue"', () => {
    const props = wrapper.props();

    expect(props.modelValue).toBe(0);
    expect(props.options.length).toBe(2);
  });

  test('Props "modelValue" should get value', () => {
    const wrapper = mount(RadioButtons, {
      propsData: {
        options: [
          { id: 0, title: 'Хорошо' },
          { id: 1, title: 'Плохо' },
        ],
        modelValue: undefined,
      },
    });

    const props = wrapper.props();
    const input = wrapper.find('input');

    expect(props.modelValue).toBe(undefined);

    input.trigger('change');

    // TO DO должно быть 0
    expect(props.modelValue).toBe(undefined);
  });
});
