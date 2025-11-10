import { mockNuxtImport } from '@nuxt/test-utils/runtime';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from '~/tests/mocks/server';

mockNuxtImport('useRuntimeConfig', () => () => {
  const { BACKEND_URL } = import.meta.env;
  return {
    app: {
      baseURL: '/',
      buildId: 'test',
    },
    public: {
      backendUrl: BACKEND_URL,
      baseUrl: BACKEND_URL,
      contact: {
        discord: 'https://discord.defivestor.com',
        email: 'info@defivestor.com',
        emailMailto: 'mailto:info@defivestor.com',
        github: 'https://t.me/defivestors',
        twitter: 'https://twitter.com/defivestors',
      },
      i18n: {
        defaultLocale: 'en',
        detectBrowserLanguage: false,
      },
    },
  };
});

beforeAll(() => server.listen({ onUnhandledRequest: `error` }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
