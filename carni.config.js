module.exports = {
  firstScene: 'start',
  firstView: 'loading',
  title: 'New Carni Game',
  build (config) {
    config.module.rules[2].type = 'asset/resource'
    return config
  }
  // plugins: [require('carni-audio')]
}
