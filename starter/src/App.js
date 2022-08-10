import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Shelves from "./components/Shelves";

import * as API from './API/BooksAPI'

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [allBooks, setAllBooks] = useState([])


  useEffect(()=>{
    const booksFn = async ()=>{
      const booksResult = await API.getAll()
      setAllBooks(booksResult)
    }
    booksFn()
  }, [])

  console.log(allBooks)

  return (
    <div className="app">
      <Header/>
      <Shelves books={allBooks}/>
    </div>
  );
}

export default App;
