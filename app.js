// import express from 'express'
const app = require('express')()
const routes = require('./routes')
const port = process.env.PORT || 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
