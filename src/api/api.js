const express = require('express');
const http = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello there'
  })
})

app.get('/todo', (req, res) => {
  res.json({
    message: 'well todo'
  })
})

app.get('/todos', (req, res) => {
  const todos = [
    {id: 1, name: 'clean up', status: 'open'},
    {id: 1, name: 'cook', status: 'done'}
  ]
  res.json({data: todos});
})

module.exports.handler = app;