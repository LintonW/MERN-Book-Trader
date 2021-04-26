import React from 'react';
//react router Link
import { Link } from 'react-router-dom';
//image
import BackgroundImage from '../images/blue.svg';

//landing component
const Landing = ({ verify }) => {
    return (
        <div className="landingContainer">
            <img src={BackgroundImage} alt="" />
            <div className="boxL1">
                <h1>Sell Books</h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas velit laborum aperiam optio nihil harum earum
                    deserunt consequatur labore? Vero.
                </p>
                <br />
                <Link to="/sell">
                    <button>Sell</button>
                </Link>
            </div>
            <div className="boxL2">
                <h1>Buy Books</h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas velit laborum aperiam optio nihil harum earum
                    deserunt consequatur labore? Vero.
                </p>
                <br />
                <Link to="/buy">
                    <button>Buy</button>
                </Link>
            </div>
            <div className="adminContainer">
                <button onClick={verify} className="adminBtn">
                    Admin
                </button>
                <Link to="/">
                    <button className="signOutBtn">Sign Out</button>
                </Link>
            </div>
        </div>
    );
};

export default Landing;
