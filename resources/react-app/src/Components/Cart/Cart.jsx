import React from "react";
import PropTypes from "prop-types";
import { DeleteSVG } from '../Icons/Icons';


import "./Cart.scss";

const Cart = (props) => {

    const { cart, removeItemFromCart } = props;

    // TODO: Wenn warenkorb gerendert -> Preis berechnen

    return <div className="cart-wrapper">
        <h2 className="cart-headline">
            Warenkorb
        </h2>
        <hr />


        <ul className="cart-list">

            {cart && !cart.length && <li><p>Aktuell gibt es keine Items im Warekorb</p></li>}

            {cart && cart.length && cart.map((book, index) => {
                return <li key={book.id + " " + index} className="cart-list-item">
                    <p>{book.title} - <strong>{book.price} €</strong></p>
                    <button onClick={() => removeItemFromCart(index)}>
                        <DeleteSVG/>
                    </button>
                </li>
            })}

        </ul>
        <div className="cart-footer">
            <span>Preis:</span>

            <span>0 €
                      </span>
        </div>
    </div>;
};

Cart.propTypes = {
    cart: PropTypes.array,
    removeItemFromCart: PropTypes.func
};




export default Cart;
