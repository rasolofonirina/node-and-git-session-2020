require('express-async-errors');
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/config')();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    winston.info(`The application works on port ${port}`);
});

module.exports = server;