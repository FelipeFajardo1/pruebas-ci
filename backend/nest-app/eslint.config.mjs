// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // Archivos o carpetas a ignorar
    ignores: [
      'eslint.config.mjs',
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.mjs',
    ],
  },

  // Configuración base de ESLint
  eslint.configs.recommended,

  // Configuración recomendada para TypeScript con comprobación de tipos
  ...tseslint.configs.recommendedTypeChecked,

  // Integración con Prettier
  eslintPluginPrettierRecommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    rules: {
      // Reglas personalizadas del proyecto
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      // Otras reglas comunes en NestJS
      'no-console': 'off',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
);
