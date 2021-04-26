//controller file to perform CRUD operations
const Users = require('../models/users.model');

//jwt
const jwt = require('jsonwebtoken');

//create
exports.register = function (req, res) {
    // Create and Save a new User
    let userModel = new Users({
        fullName: req.body.fullName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin,
    });

    //save query
    userModel.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: 'Cannot Create' });
        } else {
            console.log(data);
            res.send({ message: 'The user has been created' });
        }
    });
};

//read
exports.login = function (req, res) {
    //storing req.body values
    const email = req.body.email;
    const pwd = req.body.password;

    //finding a single user
    Users.findOne({ email: email }, function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Some error occurred while retrieving',
            });
        } else {
            //if the password is the same
            if (pwd === data.password) {
                //payload to be sent to jwt
                const payload = {
                    email: email,
                    admin: data.admin,
                };

                //getting token using jwt.sign
                const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', {
                    algorithm: 'HS256',
                });

                //sending necessary data in the response
                res.send({
                    message: 'Correct password',
                    isUser: true,
                    user: data.fullName,
                    token: token,
                });
            } else {
                res.send({ message: 'Incorrect password' });
            }
        }
    });
};

//read
exports.verify = function (req, res) {
    //verifying token
    const token = req.headers['authorization'].split(' ')[1];

    try {
        //jwt.verify
        const decoded = jwt.verify(token, 'jwt-secret');

        //if statement -> check if user is admin
        if (decoded.admin) {
            res.send({ message: 'User Is Admin', admin: true });
        } else {
            res.status(403).send({
                message: 'User Is Not Admin',
                admin: false,
            });
        }
    } catch (e) {
        res.sendStatus(401);
    }
};

//read
exports.findAll = function (req, res) {
    //find query
    Users.find(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Some error occurred while retrieving',
            });
        } else {
            res.send(data);
        }
    });
};

//read
exports.findBooks = function (req, res) {
    //find books by title
    Users.find({ 'books.title': req.body.title }, function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Some error occurred while retrieving',
            });
        } else {
            res.send(data);
        }
    });
};

//read
exports.findUser = function (req, res) {
    //finding single user
    Users.findOne({ fullName: req.body.fullName }, function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Some error occurred while retrieving',
            });
        } else {
            res.send(data);
        }
    });
};

//update
exports.addBook = function (req, res) {
    //getting the query
    let query = { fullName: req.body.fullName };

    //findOneAndUpdate query -> push to books array
    Users.findOneAndUpdate(
        query,
        { $push: { books: req.body.books } },
        { new: true },
        function (err, data) {
            if (err) {
                console.log(err);
                res.send({ message: 'Book Not Added' });
            } else {
                console.log(data);
                res.send({ message: 'Book Added' });
            }
        }
    );
};

//delete
exports.deleteBook = function (req, res) {
    let query = { fullName: req.body.fullName };

    //updateOne query -> pull from books array
    Users.updateOne(
        query,
        {
            $pull: {
                books: { title: req.body.title },
            },
        },
        function (err, data) {
            if (err) {
                console.log(err);
                res.send({ message: 'Book Not Deleted' });
            } else {
                console.log(data);
                res.send({ message: 'Book Deleted' });
            }
        }
    );
};

//edit
exports.editBook = function (req, res) {
    //getting the query
    let query = {
        fullName: req.body.fullName,
        'books.title': req.body.title,
    };

    //findOneAndUpdate query -> set new details about the book
    Users.findOneAndUpdate(
        query,
        {
            $set: {
                'books.$.title': req.body.title1,
                'books.$.author': req.body.author,
                'books.$.yearPublished': req.body.yearPublished,
                'books.$.price': req.body.price,
            },
        },
        { new: true },
        function (err, data) {
            if (err) {
                console.log(err);
                res.send({ message: 'Changes Not Made' });
            } else {
                console.log(data);
                res.send({ message: 'Changes Made' });
            }
        }
    );
};
