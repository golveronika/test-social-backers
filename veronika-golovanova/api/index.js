const express = require('express')
const app = express()

app.get('/api/0/launches/all', require('./middlewares/all'))
app.get('/api/0/launches/:id', require('./middlewares/detail'))
app.get('/api/0/ship-stats/:ids', require('./middlewares/ship-stats'))

app.listen(5000)
