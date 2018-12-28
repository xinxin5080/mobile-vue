module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      'rootValue': 37.5, // 设置根字体大小
      'propList': ['*'] // 设置哪些属性值的单位需要将px转换成rem   margin padding font-size
    }
  }
}
