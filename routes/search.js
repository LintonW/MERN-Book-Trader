//Search for a book route
module.exports = function (app) {
    const users = require('../controllers/users.controller');
    app.post('/users/books', users.findBooks);
};
