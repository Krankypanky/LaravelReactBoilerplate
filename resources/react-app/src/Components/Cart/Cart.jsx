import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DeleteSVG } from '../Icons/Icons';
import { AppContext } from '../../App';

import "./Cart.scss";

const Cart = (props) => {

    const context = useContext(AppContext)

    const { cart, removeItemFromCart } = context;

    let totalPrice = 0;

    return <div className="cart-wrapper">
        <h2 className="cart-headline">
            Warenkorb
        </h2>

        <hr />

        <ul className="cart-list">

            {cart && !cart.length && <li><p>Aktuell gibt es keine Items im Warekorb</p></li>}

            {cart && cart.length ? cart.map((book, index) => {
                totalPrice += book.price;
                return <li key={book.id + " " + index} className="cart-list-item">
                    <p>{book.title} - <strong>{book.price} €</strong></p>
                    <button onClick={() => removeItemFromCart(index)}>
                        <DeleteSVG />
                    </button>
                </li>
            }) : null}

        </ul>
        <div className="cart-footer">
            <span>Preis:</span>

            <span>{totalPrice.toFixed(2)} € </span>
        </div>
    </div>;
};

Cart.propTypes = {
    cart: PropTypes.array,
    removeItemFromCart: PropTypes.func
};




export default Cart;
