//register route
module.exports = function (app) {
    const user = require('../controllers/users.controller');
    app.post('/user/register', user.register);
};
