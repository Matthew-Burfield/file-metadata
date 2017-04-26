const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express()
const upload = multer()

app.use('/', express.static(path.join(__dirname, '/public')))

app.post('/upload', upload.single('file'), (req, res, next) => {
  const json = JSON.stringify({
    size: req.file.size
  })
  res.json(json)
})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT || 8080, () => {
  console.log('App is listening on ', process.env.PORT || 8080)
})
