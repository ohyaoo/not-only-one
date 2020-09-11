// 本地web服务器
const express = require('express')
const path = require('path')
const open = require('open')

const app = express()

app.get(express.static(path.join(__dirname, '/src')))

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
    return
  }
  const uri = 'http://localhost:3000'
  console.log(`Listening at ${uri}\n`)
  open(uri)
})
