const  winston = require('winston');
const config = require('config');

module.exports = () => {
    winston.info(config.get('name'));
};