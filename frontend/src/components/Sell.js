import React from 'react';
import { Link } from 'react-router-dom';
import Close from '../images/reply-arrow.svg';
import BackgroundImage from '../images/patternpad (1).svg';

//sell component
const Sell = ({ getTitle, getAuthor, getYear, getPrice, addBook }) => {
    return (
        <div className="sellContainer">
            <img className="backgroundImage" src={BackgroundImage} alt="" />
            <div className="closeImgSection">
                <Link to="/landing">
                    <img src={Close} alt="close" />
                </Link>
                <Link to="/books">
                    <button className="viewBooksButton">View My Books</button>
                </Link>
            </div>

            <div className="addContainer">
                <h1>Sell A Book</h1>
                <br />
                <form onSubmit={addBook} action="">
                    <input
                        onChange={getTitle}
                        placeholder="Title"
                        type="text"
                    />
                    <input
                        onChange={getAuthor}
                        placeholder="Author"
                        type="text"
                    />
                    <input
                        onChange={getYear}
                        placeholder="Year Published"
                        type="text"
                    />
                    <input
                        onChange={getPrice}
                        placeholder="Price (R)"
                        type="text"
                    />
                    <br />
                    <button>Submit Book</button>
                </form>
            </div>
        </div>
    );
};

export default Sell;
