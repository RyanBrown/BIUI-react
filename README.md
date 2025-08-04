# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
// eslint.config.js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

---

## Adding Storybook (Vite + TypeScript)

Storybook lets you develop and showcase your React components in isolation. This guide shows how to wire it up using Vite as the builder and TypeScript for all configs.

### 1. Install Storybook and peer deps

```bash
npm install --save-dev \
  storybook@latest \
  @storybook/react-vite@latest \
  @storybook/builder-vite@latest \
  @storybook/addon-essentials@latest \
  @storybook/addon-links@latest \
  ts-node typescript @types-node
```

### 2. Add Storybook scripts

In your **package.json**, add:

```jsonc
{
  "scripts": {
    // … existing scripts …
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

### 3. Scaffold the \`.storybook/\` folder

Create a **.storybook/** directory at your project root with these files:

#### \`.storybook/main.ts\`

```ts
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  }
};

export default config;
```

#### \`.storybook/preview.ts\`

```ts
// .storybook/preview.ts
import type { Parameters } from '@storybook/react';
import '../src/index.scss'; // your global styles

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
```

_Optionally add a \`manager.ts\` if you want to customize the Storybook UI theme._

### 4. Enable TypeScript for Storybook config

Create **.storybook/tsconfig.json**:

```jsonc
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ESNext",
    "esModuleInterop": true
  },
  "include": [
    "main.ts",
    "preview.ts",
    "manager.ts"
  ]
}
```

Then ensure your root **tsconfig.json** includes the `.storybook` folder:

```jsonc
{
  "compilerOptions": {
    // … your existing options …
  },
  "include": [
    "src",
    ".storybook"
  ]
}
```

### 5. Run Storybook

```bash
npm run storybook
```

Visit <http://localhost:6006> to browse your component library in isolation!

---

## Running Tests

This template uses Vitest for running unit tests.

1. **Install testing dependencies** (if not already installed):
   ```bash
   npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
   ```

2. **Add test scripts** to your \`package.json\`:
   ```jsonc
   {
     "scripts": {
       // … existing scripts …
       "test": "vitest",
       "test:watch": "vitest --watch",
       "test:coverage": "vitest run --coverage"
     }
   }
   ```

3. **Run Tests**:
   ```bash
   npm run test
   ```

4. **Watch Mode**:
   ```bash
   npm run test:watch
   ```

5. **Generate coverage report**:
   ```bash
   npm run test:coverage
   ```

Your tests should be colocated next to your components with filenames ending in \`.test.tsx\` or \`.spec.ts\`.

---

> **Tip:**
> - You can add stories alongside your components by naming files \`*.stories.tsx\` in \`src/\`.
> - Use \`npm run build-storybook\` to generate a static Storybook bundle in \`storybook-static/\`.
