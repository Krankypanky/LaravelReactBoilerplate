import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Loading from "./Components/Loading/Loading";
import Cart from "./Components/Cart/Cart";
import axios from "axios";
import config from "./config/config.default"
import BookListing from './Components/BookListing/BookListing';

export const AppContext = React.createContext({});

const App = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, updateCart] = useState([]);
    const [isDrawerOpened, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        axios.get(config.API_URL + "/api/books")
            .then((response) => {
                const books = response.data;
                setBooks(books);
            })
            .catch((e) => console.error(e))
            .finally(() => {
                setLoading(false);
            });
    }, [])

    const addItemToCart = (book) => {
        updateCart([...cart, book]);
    };

    const removeItemFromCart = (index) => {
        // aktuellen durchgang des arrays -> index

        // lösche item aus dem cart - (Array).splice

        // setze neuen state mit neuem array ohne dem item mit dem index

    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpened);
    };

    const getGeneratedClass = defaultClass => {
        const className = [defaultClass];

        if (isDrawerOpened) {
            className.push("drawer-opened");
        } else {
            className.push("drawer-closed");
        }

        return className.join(" ");
    };

    return <div>

        <Navigation toggleDrawer={toggleDrawer} isDrawerOpened={isDrawerOpened}/>

        <Loading loading={loading} />

        <div className={getGeneratedClass("main-wrapper")}>
            <div className='main-col-wrapper'>
                <div className='content-wrapper'>
                    {!loading && <BookListing books={books} toggleDrawer={toggleDrawer} addItemToCart={addItemToCart} isDrawerOpened={isDrawerOpened} />}
                </div>
            </div>
        </div>
        <div className={getGeneratedClass("drawer-wrapper")}>
            <Cart cart={cart} removeItemFromCart={removeItemFromCart} />
        </div>
    </div>;
};

export default App;