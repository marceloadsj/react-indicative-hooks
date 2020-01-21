import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const input = 'src/index.js';

const plugins = [
    external(),
    url({ exclude: ['**/*.svg'] }),
    babel({
        exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
        namedExports: {
            'node_modules/indicative/builds/main.js': ['validate', 'validateAll', 'rule']
        }
    })
];

export default [
    {
        input,
        output: {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        plugins
    },
    {
        input,
        output: {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        },
        plugins
    },
    {
        input,
        output: {
            file: pkg.browser,
            format: 'umd',
            sourcemap: true,
            name: 'reactIndicativeHooks',
            globals: {
                react: 'React'
            }
        },
        plugins: [...plugins, terser()]
    }
];
