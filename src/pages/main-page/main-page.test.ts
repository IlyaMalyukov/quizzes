import { beforeEach, describe, expect, test } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import { shallowMount } from '@vue/test-utils';

import { MainPage } from '@/pages/main-page'

describe('Main Page', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test('Main Page renders title correctly', () => {
        const wrapper = shallowMount(MainPage);

        expect(wrapper.text()).toContain('Квизы');
    });
});


