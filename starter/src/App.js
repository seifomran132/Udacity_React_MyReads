import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import Search from "./components/Search";
import * as API from "./API/BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const booksFn = async () => {
      const booksResult = await API.getAll();
      setAllBooks(booksResult);
    };
    booksFn();
  }, []);

  console.log(allBooks);

  function showSearchHandler() {
    setShowSearchpage(!showSearchPage);
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <Search searchToggler={showSearchHandler}/>
      ) : (
        <div>
          <Header />
          <Shelves books={allBooks} />
          <div className="open-search">
            <button onClick={() => setShowSearchpage(!showSearchPage)}>
              Add a book
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
