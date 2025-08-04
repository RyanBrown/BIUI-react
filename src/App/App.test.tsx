// src/App/App.test.tsx
/**
 * App.test.tsx
 *
 * Tests for the App component to ensure all sections render correctly.
 */

import React from 'react';
import { renderWithProviders } from '../utils/test-utils';
import App from './App';

describe('App', () => {
  it('renders Hero, Features, CTA, and Footer sections', () => {
    const { getByText } = renderWithProviders(<App />);

    // Hero section
    expect(getByText(/build ai-powered apps in minutes/i)).toBeInTheDocument();

    // Features section
    expect(getByText(/instant search/i)).toBeInTheDocument();

    // CTA section
    expect(getByText(/ready to take off/i)).toBeInTheDocument();

    // Footer section
    expect(getByText(/privacy policy/i)).toBeInTheDocument();
  });
});
