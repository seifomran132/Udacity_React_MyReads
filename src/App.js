import "./App.css";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import * as API from "./API/BooksAPI";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const booksFn = async () => {
      const booksResult = await API.getAll();
      setAllBooks(booksResult);
    };
    booksFn();
  }, []);

  

  function changeShelf(book, shelf) {
    API.update(book, shelf);
    book.shelf = shelf;
    let newBooks = allBooks.filter((myBook) => myBook.id !== book.id);
    setAllBooks(() => newBooks.concat(book));
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="search"
          exact
          element={
            <Search
              changeShelf={changeShelf}
            />
          }
        />
        <Route
          path="/"
          exact
          element={
            <HomeScreen
              allBooks={allBooks}
              changeShelf={changeShelf}
            ></HomeScreen>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
