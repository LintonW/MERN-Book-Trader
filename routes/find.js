//find a single user route
module.exports = function (app) {
    const users = require('../controllers/users.controller');
    app.post('/users/user', users.findUser);
};
