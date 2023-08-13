import { setupServer } from 'msw/node';
import { beforeEach, afterEach, afterAll } from 'vitest';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

beforeEach(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
