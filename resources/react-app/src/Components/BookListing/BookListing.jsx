import React from "react";
import PropTypes from "prop-types";
import "./BookListing.scss";

function BookListing(props) {

    // books destructuring
    const { books, addToCart } = props;

    // books rendern

    // wenn keine Bücher das sind
    // rendert mir bitte den Text: Es sind aktuell keine Bücher verfügbar

    if (!books.length) {
        return <p>Aktuell gibt es keine Bücher</p>
    }

    return <ul className={"BookListing"}>
        {books.map(book =>
            <li key={book.id} className="BookListing__item">
                <img src={book.image} alt={book.title} width="100" />
                <button onClick={() => addToCart(book)}>Add to Cart</button>
            </li>
        )}
    </ul>
}

BookListing.propTypes = {
    books: PropTypes.array.isRequired,
    cart: PropTypes.array.isRequired,
    addToCart: PropTypes.func,
}


export default BookListing;
