// 默认的构建工具
function bundler() {
  // const { spawn } = require('child_process') // eslint-disable-line global-require
  // spawn('gulp -f base/bundler/gulpfile.js', {
  //   stdio: 'inherit',
  //   shell: true
  // })
  require('./server') // eslint-disable-line global-require
}

module.exports = bundler
