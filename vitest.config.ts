import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', // changed from 'jsdom' to 'node'
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],
      all: true,
      include: ['src/**/*.{ts,tsx}'],
    },
  },
});
