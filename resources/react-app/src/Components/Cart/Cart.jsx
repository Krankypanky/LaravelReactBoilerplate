import React from "react";
import PropTypes from "prop-types";

import "./Cart.scss";

const Cart = (props) => {
    
    // TODO: Wenn warenkorb gerendert -> Preis berechnen

    return <div className="cart-wrapper">
        <h2 className="cart-headline">
            Warenkorb
        </h2>
        <hr/>
        TODO: Warenkorb rendern <br/>
        TODO: Text rendern wenn Warenkorb leer
        <ul className="cart-list">
            
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
