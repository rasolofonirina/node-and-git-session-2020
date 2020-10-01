const bodyParser = require('body-parser');
const error = require('../middlewares/error');

const home = require('../routes/home');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use('/', home);
    app.use(error);
};