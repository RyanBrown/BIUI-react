// src/setupTests.ts
/**
 * setupTests.ts
 *
 * Global setup for Vitest testing environment.
 */

import '@testing-library/jest-dom';

/**
 * Mock IntersectionObserver for testing environments.
 * Ensures that elements are considered visible immediately.
 */
class IntersectionObserverMock {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    this.options = options;
  }

  observe() {
    // Simulate immediate intersection
    this.callback([{ isIntersecting: true } as IntersectionObserverEntry], this);
  }

  unobserve() { }
  disconnect() { }
}

// @ts-ignore
window.IntersectionObserver = IntersectionObserverMock;
// @ts-ignore
global.IntersectionObserver = IntersectionObserverMock;
