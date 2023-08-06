import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import { ResultCard } from './index';

describe('Result Card', () => {
  const routes = [
    { path: '/', component: { template: '<div>Назад</div>' } }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  const wrapper = mount(ResultCard, {
    global: { plugins: [router] },
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

  test('Render router-link to "Назад"', () => {
    const link = wrapper.find('a');

    expect(link.text()).toBe('Назад');
    expect(link.attributes('href')).toBe('/');
  });
});
