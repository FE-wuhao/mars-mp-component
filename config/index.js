/*
 * @Author: 吴灏
 * @Date: 2021-07-04 21:24:35
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-04 22:33:17
 * @Description: file content
 */
import { resolve } from 'path'

const config = {
  projectName: 'mars-mp-components',
  date: '2021-7-4',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [{ from: 'ext.json', to: 'dist/ext.json' }],
    options: {},
  },
  alias: {
    '@/hooks': resolve(__dirname, '..', 'src/hooks'),
    '@/utils': resolve(__dirname, '..', 'src/utils'),
    '@/components': resolve(__dirname, '..', 'src/components'),
    '@/interfaces': resolve(__dirname, '..', 'src/interfaces'),
    '@/pages': resolve(__dirname, '..', 'src/pages'),
    '@/fonts': resolve(__dirname, '..', 'src/fonts'),
    '@/icons': resolve(__dirname, '..', 'src/icons'),
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  miniCssExtractPluginOption: {
    //忽略css文件引入顺序
    ignoreOrder: true,
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
