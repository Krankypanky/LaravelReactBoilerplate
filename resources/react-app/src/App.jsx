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


  if(loading){
    return <Loading loading={loading} alternativeText={"Ich bin nun der Text"} />
  }

  return (
    <div>
      <BookListing books={books}/>
    </div>
  );
}

export default App;
