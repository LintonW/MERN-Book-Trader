//login route
module.exports = function (app) {
    const user = require('../controllers/users.controller');
    app.post('/user/login', user.login);
};
