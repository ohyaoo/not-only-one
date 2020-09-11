const bundler = require('./bundler')
const { USENAME } = require('./constants')

const userName = Object.values(USENAME)

// 内核
class Core {
  constructor() {
    // 构建工具
    this.bundler = null
    // 路由
    this.router = null
  }

  // 初始化，
  init() {
    if (!this.bundler) {
      console.warn('没有自定义构建工具，采用默认构建工具')
      this.bundler = bundler
    }
    if (this.router) {
      this.router()
    }
    this.bundler()
  }

  // 插入配置
  use(name, execute) {
    if (userName.indexOf(name) === -1) {
      console.log('未指定当前配置项')
      return this
    }
    if (execute) {
      this[name] = execute
    }
    console.log(`插入配置${name}`)
    return this
  }
}

module.exports = Core
