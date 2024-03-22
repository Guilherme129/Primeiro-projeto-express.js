const express = require('express')
const app = express()
var ola = ['Oi ', 'tudo ', 'bem ', '?']

app.get('/', (req, res) => {
  res.send('<h1>' + ola[0] + ola[1] + ola[2] + ola[3] + '</h1>')
})

app.listen(3001, () => {
  console.log('server está usando a porta 3001')
})
