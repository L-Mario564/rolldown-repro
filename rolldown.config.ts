import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

export default defineConfig([
  {
    input: {
      'index': './index.ts',
      'other': './other.ts',
    },
    output: [
      {
        format: 'esm',
        dir: 'dist',
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-chunk.js',
        sourcemap: true,
      }
    ],
    tsconfig: 'tsconfig.json',
    plugins: [dts({
      tsconfig: 'tsconfig.json',
    })],
  },
]);
