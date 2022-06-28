'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      remUnit: 100
      // 这里设计稿的宽度为 414 / 10
    }
  }

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  var postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap,
      // plugins: [require('postcss-pxtorem')({
      //   rootValue: 100, // 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      //   propList: ['*'], // 是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
      //   unitPrecision: 5, // 保留rem小数点多少位
      //   // selectorBlackList: ['.radius'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
      //   replace: true, // 这个真不知到干嘛用的。有知道的告诉我一下
      //   mediaQuery: false // 媒体查询( @media screen 之类的)中不生效
      // })]
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less', {
      modifyVars: {
        // 直接覆盖变量
        'gray-8': '#222',
        'gray-6': '#999',
        'cell-line-height': '42px',
        'cell-vertical-padding': '27px',
        'font-size-sm': '24px',
        'font-size-md': '28px',
        'font-size-lg': '32px',
        'cell-font-size': '@font-size-lg',
        'white': '#F3F6F9',
        'button-default-height': '78px',
        'button-border-radius': '12px',
        'nav-bar-height': '88px',
        'nav-bar-arrow-size': '48px',
        'nav-bar-icon-color': '@gray-8',
        'nav-bar-text-color': '@gray-8',
        'picker-background-color': '#F3F6F9'
        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        // hack: `true; @import "your-less-file-path.less";`,
      },
    }),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.createNotifierCallback = function () {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') {
      return
    }
    const error = errors[0]

    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title: pkg.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
