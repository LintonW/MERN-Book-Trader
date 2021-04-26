import React from 'react';
import { Link } from 'react-router-dom';
import Close from '../images/reply-arrow.svg';
import BackgroundImage from '../images/green.svg';

//search results component
const Results = ({ searchResults, searchResultsLoaded }) => {
    return (
        <div className="resultsContainer">
            <img className="backgroundImage" src={BackgroundImage} alt="" />
            <div className="closeImgSection">
                <Link to="/buy">
                    <img src={Close} alt="close" />
                </Link>
            </div>

            {searchResultsLoaded && (
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Year Published</th>
                                <th>Price</th>
                                <th>Seller Name</th>
                                <th>Seller Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map((item) => (
                                <tr key={item.fullName}>
                                    <td>
                                        {item.books.map((book) => book.title)}
                                    </td>
                                    <td>
                                        {item.books.map((book) => book.author)}
                                    </td>
                                    <td>
                                        {item.books.map(
                                            (book) => book.yearPublished
                                        )}
                                    </td>
                                    <td>
                                        R{item.books.map((book) => book.price)}
                                    </td>
                                    <td>{item.fullName}</td>
                                    <td>{item.contactNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Results;
