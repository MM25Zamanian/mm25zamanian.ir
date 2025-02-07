import {tailwindConfig} from '@gecut/styles/index.js';
import path from 'path';

export const systemFont = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"Roboto"',
  '"Oxygen"',
  '"Ubuntu"',
  '"Cantarell"',
  '"Open Sans"',
  'Helvetica Neue',
  '"Arial"',
  '"Noto Sans"',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

/** @type {import('tailwindcss').Config} */
export default {
  ...tailwindConfig,

  content: [
    'index.html',
    'src/**/*.ts',
    './node_modules/.vite/deps/**/*.js',
    path.dirname(require.resolve('@gecut/components')) + '/**/*.js',
  ],

  theme: {
    ...tailwindConfig.theme,

    fontFamily: {
      'vazirmatn': [
        ['vazirmatn', 'sans-serif', ...systemFont],
        {
          fontFeatureSettings: '"calt" 1, "tnum" 0',
        },
      ],
      system: systemFont,
      sans: systemFont,
    },
  },
};
