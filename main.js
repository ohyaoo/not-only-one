const Core = require('./base/Core')
// const { USENAME } = require('./base/constants')
// const router = require('./registers/router')
// const webpack = require('./registers/webpack')

const core = new Core()

// core.use(USENAME.ROUTER, router).use(USENAME.BUNDLER, webpack).init()
core.init()
