import React, { useContext } from "react";
import { AddSVG } from "../Icons/Icons.jsx";
import "./BookListing.scss"
import { Link } from 'react-router-dom';
import { AppContext } from '../../App.jsx';

const BookListing = () => {

    const context = useContext(AppContext);

    const { books, toggleDrawer, addItemToCart, isDrawerOpened } = context;

    if (!books || !books.length) {
        return "Aktuell gibt es keine Bücher"
    } else return <>
        <h1>Bestseller Bücher 2020</h1>
        <ul className="book-overview-list">
            {
                books.map((book, index) =>
                    <li className="book-overview-list-item" key={book.id}>
                        <p>{book.title}</p>

                        <Link to={"/details/" + book.id}>
                            <img src={book.image} alt={book.title} />
                        </Link>

                        <button
                            className="cart-button"
                            onClick={() => {
                                addItemToCart(book);
                                if (!isDrawerOpened) {
                                    toggleDrawer();
                                }
                            }}>
                            <AddSVG />
                        </button>
                    </li>
                )
            }
        </ul>
    </>
};
export default BookListing;


