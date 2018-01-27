import replace from 'rollup-plugin-replace';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
const version = require('../package.json').version;

export default {
  moduleName: 'sucrose',
  entry: './src/main.js',
  // dest: './build/sucrose.js',
  format: 'umd',
  // node
  external: [
    '@sugarcrm/d3-sugar',
  ],
  // browser
  globals: {
    '@sugarcrm/d3-sugar': 'd3sugar',
  },
  // sourceMap: 'inline',
  treeshake: false,
  plugins: [
    replace({
      exclude: 'node_modules/**',
      values: {
        ENV_VERSION: version,
        ENV_BUILD: 'sgr',
        ENV_DEV: (process.env.DEV || false),
        '\'d3\'': '\'@sugarcrm\/d3-sugar\'',
      },
    }),
    eslint({
      throwOnError: true,
      rules: {
        'no-console': (process.env.DEV === 'false' ? 2 : 0)
      }
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
  ],
};
