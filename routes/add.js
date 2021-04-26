//Add a book route
module.exports = function (app) {
    const user = require('../controllers/users.controller');
    app.post('/user/addBook', user.addBook);
};
