//verify route
module.exports = function (app) {
    const user = require('../controllers/users.controller');
    app.get('/user/verify', user.verify);
};
