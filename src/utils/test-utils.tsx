/**
 * test-utils.tsx
 *
 * Custom render functions and utilities for testing React components
 * with Vitest and React Testing Library.
 */

import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Extend RenderOptions to include optional route
interface ExtendedRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
}

type WrapperProps = { children: React.ReactNode };

const AllProviders: React.FC<WrapperProps> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

/**
 * Renders a React component with all necessary providers.
 *
 * @param ui React element to render
 * @param options Optional render options, including route
 */
export function renderWithProviders(
  ui: ReactElement,
  { route = '/', ...options }: ExtendedRenderOptions = {}
) {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: AllProviders, ...options });
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';
