const path = require('path');
module.exports = {
  /** 公共存储二级目录 */
  diskPath: path.join('.xeajsElectron', 'electronTemplate'),
  /** 开发运行时 runtime */
  nodemon: true,

  /** 开发运行时 runtime */
  eslint: false,

  /** 开发运行时 runtime */
  tslint: false,

  /** 主进程端口，开发环境渲染进程端口号 +=1 */
  port: 10150,

  entry: {
    views: 'views/index.tsx',
    serve: 'serve/index.ts'
  },

  output: {
    views: 'dist/views',
    serve: 'dist/serve'
  },

  viewsPublicPath: '/',

  viewsAssetsDir: 'dist/views/assets',

  devServer: {
    after() {},
    before() {}
  },
  prefix: '/apis'
};
