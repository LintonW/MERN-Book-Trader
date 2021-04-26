//react, useState & useEffect
import React, { useState, useEffect } from 'react';
//react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//axios
import axios from 'axios';
//components
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import Sell from './components/Sell';
import Buy from './components/Buy';
import Results from './components/Results';
import Books from './components/Books';
import Edit from './components/Edit';
//css
import './App.scss';

function App() {
    //Register and Login State
    const [valueFullName, setValueFullName] = useState('');
    const [valueContactNumber, setValueContactNumber] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    //Main component state
    const [valueTitle, setValueTitle] = useState('');
    const [valueSearchTitle, setValueSearchTitle] = useState('');
    const [valueAuthor, setValueAuthor] = useState('');
    const [valueYear, setValueYear] = useState('');
    const [valuePrice, setValuePrice] = useState('');
    const [user, setUser] = useState('User One');
    const [userBooks, setUserBooks] = useState([]);
    const [userBooksLoaded, setUserBooksLoaded] = useState(false);
    const [bookToBeEdited, setbookToBeEdited] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchResultsLoaded, setSearchResultsLoaded] = useState(false);

    //Register and Login functions
    const getFullName = (e) => {
        setValueFullName(e.target.value);
    };
    const getContactNumber = (e) => {
        setValueContactNumber(e.target.value);
    };
    const getEmail = (e) => {
        setValueEmail(e.target.value);
    };
    const getPassword = (e) => {
        setValuePassword(e.target.value);
    };

    //Register a new user
    const register = () => {
        alert('Thank you for registering!');

        //axios post
        axios
            .post('http://localhost:3001/user/register', {
                fullName: valueFullName.trim(),
                contactNumber: valueContactNumber.trim(),
                email: valueEmail.trim(),
                password: valuePassword.trim(),
                admin: false,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //login
    const login = (e) => {
        //axios post
        axios
            .post('http://localhost:3001/user/login', {
                email: valueEmail.trim(),
                password: valuePassword.trim(),
            })
            .then((res) => {
                let data = res.data;
                //checking if user is on the database
                if (data.isUser === true) {
                    setLoggedIn(true);
                    setUser(data.user);
                    setToken(data.token);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //verifying the user with jwt token and Authorization in the headers
    const verify = () => {
        //axios get
        axios
            .get('http://localhost:3001/user/verify', {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })
            .then((res) => {
                let data = res.data;
                if (data.admin === true) {
                    alert('You Have Permission As Admin');
                }
            })
            .catch((err) => {
                console.log(err);
                alert('You Do Not Have Permission');
            });
    };

    //Main component functions
    const getTitle = (e) => {
        setValueTitle(e.target.value);
    };
    const getAuthor = (e) => {
        setValueAuthor(e.target.value);
    };
    const getYear = (e) => {
        setValueYear(e.target.value);
    };
    const getPrice = (e) => {
        setValuePrice(e.target.value);
    };

    //add a new book
    const addBook = (e) => {
        alert('Book Added');

        //axios post
        axios
            .post('http://localhost:3001/user/addBook', {
                fullName: user,
                books: [
                    {
                        title: valueTitle.trim(),
                        author: valueAuthor.trim(),
                        yearPublished: Number(valueYear.trim()),
                        price: Number(valuePrice.trim()),
                    },
                ],
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //useEffect to get the users books
    useEffect(() => {
        axios
            .post('http://localhost:3001/users/user', {
                fullName: user,
            })
            .then((res) => {
                setUserBooks(res.data);
                setUserBooksLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userBooks]);

    //handling DELETE
    const deleteBook = (selected) => {
        alert('Book Removed');

        //axios delete
        axios
            .delete('http://localhost:3001/user/delete', {
                data: {
                    fullName: user,
                    title: selected,
                },
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //getting the selected book to be edited
    const getBook = (selected) => {
        setbookToBeEdited(selected);
    };

    //editing the selected book
    const editBook = () => {
        alert('Details Changed');

        axios
            .post('http://localhost:3001/user/update', {
                fullName: user,
                title: bookToBeEdited.title,
                title1: valueTitle.trim(),
                author: valueAuthor.trim(),
                yearPublished: Number(valueYear.trim()),
                price: Number(valuePrice.trim()),
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //getting the users search input
    const getSearchTitle = (e) => {
        setValueSearchTitle(e.target.value);
    };

    //searching for the users input
    const searchBook = () => {
        axios
            .post('http://localhost:3001/users/books', {
                title: valueSearchTitle.trim(),
            })
            .then((res) => {
                setSearchResults(res.data);
                setSearchResultsLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //rendering the components
    //react router with the correct way to render component with props
    return (
        <Router>
            <Route
                path="/"
                exact
                render={(props) => (
                    <Login
                        {...props}
                        login={login}
                        getEmail={getEmail}
                        getPassword={getPassword}
                    />
                )}
            />

            <Route
                path="/landing"
                exact
                render={(props) =>
                    loggedIn && <Landing {...props} verify={verify} />
                }
            />

            <Route
                path="/register"
                exact
                render={(props) => (
                    <Register
                        {...props}
                        getFullName={getFullName}
                        getContactNumber={getContactNumber}
                        getEmail={getEmail}
                        getPassword={getPassword}
                        register={register}
                    />
                )}
            />

            <Route
                path="/sell"
                exact
                render={(props) => (
                    <Sell
                        {...props}
                        getTitle={getTitle}
                        getAuthor={getAuthor}
                        getYear={getYear}
                        getPrice={getPrice}
                        addBook={addBook}
                    />
                )}
            />

            <Route
                path="/buy"
                exact
                render={(props) => (
                    <Buy
                        {...props}
                        getSearchTitle={getSearchTitle}
                        searchBook={searchBook}
                    />
                )}
            />

            <Route
                path="/results"
                exact
                render={(props) => (
                    <Results
                        {...props}
                        searchResults={searchResults}
                        searchResultsLoaded={searchResultsLoaded}
                    />
                )}
            />

            <Route
                path="/books"
                exact
                render={(props) => (
                    <Books
                        {...props}
                        userBooks={userBooks}
                        userBooksLoaded={userBooksLoaded}
                        deleteBook={deleteBook}
                        getBook={getBook}
                    />
                )}
            />

            <Route
                path="/edit"
                exact
                render={(props) => (
                    <Edit
                        {...props}
                        getTitle={getTitle}
                        getAuthor={getAuthor}
                        getYear={getYear}
                        getPrice={getPrice}
                        editBook={editBook}
                        bookToBeEdited={bookToBeEdited}
                    />
                )}
            />
        </Router>
    );
}

export default App;
