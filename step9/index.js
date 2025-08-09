const express = require('express')
const app = express()

const port = 8080
const serviceName = '/WHY2025/v1'

var amstelveen = require('./amstelveen')

app.use(serviceName, amstelveen)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}${serviceName}`))
