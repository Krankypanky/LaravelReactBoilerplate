import React from "react";
import PropTypes from "prop-types";
import "./BookListing.scss";

function BookListing(props) {

    // books destructuring
    const { books } = props;

    // books rendern

    // wenn keine Bücher das sind
    // rendert mir bitte den Text: Es sind aktuell keine Bücher verfügbar

    if (!books.length) {
        return <p>Aktuell gibt es keine Bücher</p>
    }

    return <ul className={"BookListing"}>
        {books.map(book =>
            <li key={book.id} className="BookListing__item">
                <a href="">
                    <img src={book.image} alt={book.title} width="100" />
                </a>
            </li>
        )}
    </ul>
}

BookListing.propTypes = {
    books: PropTypes.array.isRequired
}


export default BookListing;
