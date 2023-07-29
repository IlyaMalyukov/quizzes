import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils';

import { ResultCard } from './index';

describe('Result Card', () => {
  const wrapper = shallowMount(ResultCard, {
    propsData: {
      result: { id: 0, value: 'Sorry you’re not a winner' },
    },
  });

  test('mount component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Result Card has props "result" and "points"', () => {
    const props = wrapper.props();

    expect(props.result.id).toBe(0);
    expect(props.result.value).toBe('Sorry you’re not a winner');
  });
});
