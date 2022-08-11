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

 

  function showSearchHandler() {
    setShowSearchpage(!showSearchPage);
  }

  function changeShelf(book, shelf) {
    
    API.update(book, shelf);
    book.shelf = shelf;
    let newBooks = allBooks.filter(myBook=>(
      myBook.id !== book.id
    ))
    setAllBooks(()=>(
      newBooks.concat(book)
    ))
    
   
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <Search searchToggler={showSearchHandler} changeShelf={changeShelf}/>
      ) : (
        <div>
          <Header />
          <Shelves books={allBooks} changeShelf={changeShelf}/>
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
