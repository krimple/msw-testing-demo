// sample based on https://github.com/bikasv/react-vite-rtk-msw
import { setupServer } from 'msw/node';
import { handlers } from './msw-handlers';
export const mswServer = setupServer(...handlers);
