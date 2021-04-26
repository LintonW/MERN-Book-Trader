import React from 'react';
import { Link } from 'react-router-dom';
import Close from '../images/reply-arrow.svg';
import BackgroundImage from '../images/yellow.svg';

//buy component
const Buy = ({ getSearchTitle, searchBook }) => {
    return (
        <div className="buyContainer">
            <img className="backgroundImage" src={BackgroundImage} alt="" />
            <div className="closeImgSection">
                <Link to="/landing">
                    <img src={Close} alt="close" />
                </Link>
            </div>

            <div className="searchContainer">
                <h1>Search For A Book</h1>
                <br />
                <form action="">
                    <input
                        onChange={getSearchTitle}
                        placeholder="Title of Book"
                        type="text"
                    />
                    <br />
                    <Link to="/results">
                        <button onClick={searchBook}>Search</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Buy;
