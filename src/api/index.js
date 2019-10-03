const app = require('./api');

const http = require('serverless-http');

module.exports.handler = http(app);