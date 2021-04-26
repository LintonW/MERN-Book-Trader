//delete a book route
module.exports = function (app) {
    const user = require('../controllers/users.controller');
    app.delete('/user/delete', user.deleteBook);
};
