import React, { useEffect, useState } from "react";
import * as API from "../API/BooksAPI";
import Book from "./Book";
import Error from "./Error";

function Search(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const search = async () => {
      const result = await API.search(inputValue, 20);
      if (Array.isArray(result)) {
        setSearchResult(result);
      } else {
        setSearchResult([]);
        setError(true);
      }
      
    };


    // debouncing before sending the request improve performance
    const searchTimeout = setTimeout(() => {
      if (inputValue) {
        search();
      }
    }, 200);

    // Cleaning the timeout
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [inputValue]);

  

  function searchInputHandler(e) {
    if(e.target.value === "") {
      
      setError(false)
      setSearchResult([])
    }

    setInputValue(e.target.value);
  }

  let searchResultBooks;

  
  if (error) {
    searchResultBooks = (
      <Error title="Error 404" msg="Sorry we couldn't find this item"></Error>
    );
  } else {
    searchResultBooks = searchResult.map((myBook) => (
      <li key={myBook.id}>
        <Book book={myBook} changeShelf={props.changeShelf}></Book>
      </li>
    ));
  }

  

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => props.searchToggler()}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={searchInputHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{searchResultBooks}</ol>
      </div>
    </div>
  );
}

export default Search;
