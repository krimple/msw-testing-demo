/// <reference types="vitest" />
import {expect, beforeAll, afterEach, afterAll } from 'vitest';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import {mswServer} from "@/../mocks/msw-node";

expect.extend(matchers);

beforeAll(() => {
   mswServer.listen( { onUnhandledRequest: 'error'});
});

afterEach(() => {
    mswServer.resetHandlers();
    cleanup();
});

afterAll(() => {
    mswServer.close();
})

// so tests don't have to manually import it
export {mswServer};