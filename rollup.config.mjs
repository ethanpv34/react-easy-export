import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/react-easy-export.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ 
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    terser()
  ],
  external: ['react', 'react-dom']
};
