import React from 'react';
import { Link } from 'react-router-dom';
import Close from '../images/reply-arrow.svg';
import BackgroundImage from '../images/green.svg';

//edit component
const Edit = ({ getTitle, getAuthor, getYear, getPrice, editBook }) => {
    return (
        <div>
            <div className="editContainer">
                <img className="backgroundImage" src={BackgroundImage} alt="" />
                <div className="closeImgSection">
                    <Link to="/books">
                        <img src={Close} alt="close" />
                    </Link>
                </div>

                <div className="editContainer">
                    <h1>Edit Book</h1>
                    <br />
                    <form onSubmit={editBook} action="">
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
                        <button>Change Book Details</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
