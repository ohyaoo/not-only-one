const gulp = require('gulp')
const WebServer = require('gulp-webserver')

const path = require('path')

const basePath = path.join(__dirname, '../../')

function startServer() {
  return gulp.src(path.join(basePath, '/dist')).pipe(WebServer({
    port: 3000, // 端口
    host: 'localhost', // 地址
    open: true,
    livereload: true
  }))
}

function copyHtml() {
  return gulp.src(path.join(basePath, 'src/index.html'))
    .pipe(gulp.dest(path.join(basePath, '/dist')))
}

function bundle() {
  return gulp.src(path.join(basePath, 'src/*.js'))
    .pipe(gulp.dest(path.join(basePath, '/dist')))
}

// 监听
function watchFile(cb) {
  gulp.watch(path.join(basePath, 'src/index.js'), (cb1) => {
    bundle()
    cb1()
  })

  gulp.watch(path.join(basePath, 'src/index.html'), (cb1) => {
    copyHtml()
    cb1()
  })

  cb()
}

exports.default = gulp.series(copyHtml, bundle, startServer, watchFile)
