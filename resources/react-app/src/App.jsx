import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from './Components/Loading/Loading';
import BookListing from './Components/BookListing/BookListing';

function App() {

  // desctructure

  // state
  const [loading, setLoading] = useState(true);
  const [books, setBook] = useState([])
  const [cart, updateCart] = useState([])

  // hooks
  useEffect(() => {
    axios.get("http://reactshop.local/api/books")
      .then((response) => setBook(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [])

  // functions
  function addToCart(book){
    console.log(book, "triggered");
    const updatedCart = [...cart];
    updatedCart.push(book)
    updateCart(updatedCart);
  }


  if(loading){
    return <Loading loading={loading} alternativeText={"Ich bin nun der Text"} />
  }

  console.log(cart);

  return (
    <div>
      <BookListing books={books} cart={cart} addToCart={addToCart}/>
    </div>
  );
}

export default App;
