// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  plugins: [
    resolve(),
    commonjs()
  ],
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'faLoadTest'
  }
};
