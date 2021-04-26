import React from 'react';
import { Link } from 'react-router-dom';
import Close from '../images/reply-arrow.svg';
import BackgroundImage from '../images/red.svg';
import Delete from '../images/close-red.svg';
import Edit from '../images/edit-round.svg';

//books component
const Books = ({ userBooks, userBooksLoaded, deleteBook, getBook }) => {
    //setting the books
    let books = userBooks.books;

    //using props to get selected item
    const deleteSelected = (selected) => deleteBook(selected);
    const editSelected = (selected) => getBook(selected);

    return (
        <div className="booksContainer">
            <img className="backgroundImage" src={BackgroundImage} alt="" />
            <div className="closeImgSection">
                <Link to="/sell">
                    <img src={Close} alt="close" />
                </Link>
            </div>

            {userBooksLoaded && (
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Year Published</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((item) => (
                                <tr key={item.title}>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.yearPublished}</td>
                                    <td>R{item.price}</td>
                                    <td>
                                        <img
                                            className="deleteBtn"
                                            onClick={() =>
                                                deleteSelected(item.title)
                                            }
                                            src={Delete}
                                            alt=""
                                        />
                                    </td>
                                    <td>
                                        <Link to="/edit">
                                            <img
                                                className="editBtn"
                                                onClick={() =>
                                                    editSelected(item)
                                                }
                                                src={Edit}
                                                alt=""
                                            />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Books;
