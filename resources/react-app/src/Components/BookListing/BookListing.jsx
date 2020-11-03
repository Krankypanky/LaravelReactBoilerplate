import React from "react";
import PropTypes from "prop-types";
import { AddSVG } from "../Icons/Icons.jsx";
import "./BookListing.scss"

const BookListing = (props) => {

    const { books, toggleDrawer, addItemToCart, isDrawerOpened } = props

    if (!books || !books.length) {
        return "Aktuell gibt es keine Bücher"
    } else return <>
        <h1>Bestseller Bücher 2020</h1>
        <ul className="book-overview-list">
            {
                books.map((book, index) =>
                    <li className="book-overview-list-item" key={book.id}>
                        <p>{book.title}</p>
                        <img src={book.image} alt={book.title} />
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

BookListing.propTypes = {
    books: PropTypes.array,
    addItemToCart: PropTypes.func,
    isDrawerOpened: PropTypes.bool,
    toggleDrawer: PropTypes.func
};

export default BookListing;


