//home route
module.exports = function (app) {
    const users = require('../controllers/users.controller');
    app.get('/users', users.findAll);
};
