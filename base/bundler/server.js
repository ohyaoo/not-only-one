const express = require('express')
const webpack = require('webpack')
const path = require('path')
const open = require('open')
const config = require('./webpack.config')

const app = express()

const compiler = webpack(config)

app.use(express.static(path.join(__dirname, '../../')))

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: ''
  })
)

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
    return
  }
  const uri = 'http://localhost:3000'
  console.log(`Listening at ${uri}\n`)
  open(uri)
})
