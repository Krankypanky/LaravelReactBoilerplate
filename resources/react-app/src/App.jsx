import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Loading from "./Components/Loading/Loading";
import Cart from "./Components/Cart/Cart";
import axios from "axios";
import config from "./config/config.default"
import routes from "./routes"

export const AppContext = React.createContext({});

// ContextProvider & ContextConsumer

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

        // kopie erstellen
        const copiedCart = [...cart];

        // lösche item aus dem cart - (Array).splice
        copiedCart.splice(index, 1);

        // setze neuen state mit neuem array ohne dem item mit dem index
        updateCart(copiedCart);

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

        <AppContext.Provider value={{
            // isDrawerOpened: isDrawerOpened
            // =
            isDrawerOpened,
            books,
            cart: cart,
            addItemToCart,
            removeItemFromCart,
            toggleDrawer
        }}>

            <Navigation/>

            <Loading loading={loading} />

            <div className={getGeneratedClass("main-wrapper")}>
                <div className='main-col-wrapper'>
                    <div className='content-wrapper'>
                        {!loading && routes}
                    </div>
                </div>
            </div>
            <div className={getGeneratedClass("drawer-wrapper")}>
                <Cart/>
            </div>

        </AppContext.Provider>
    </div>;
};

export default App;