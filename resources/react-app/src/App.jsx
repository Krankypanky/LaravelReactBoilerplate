import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  // desctructure

  // state
  const [loading, setLoading] = useState(true);
  const [books, setBook] = useState([])

  // hooks
  useEffect(() => {
    axios.get("http://reactshop.local/api/books")
      .then((response) => setBook(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));

  }, [])

  console.log(books);

  // functions



  return (
    <div>
      {loading ? <div>Loading</div> : null}
      <ul>
        {(!loading && books.length) ?
          books.map(book =>
            <li key={book.id}>
              <img src={book.image} alt={book.title} width="100"/>
            </li>
          )
          : null}
      </ul>


    </div>
  );
}

export default App;
