import React, { useEffect, useState } from "react";
import * as API from "../API/BooksAPI";
import Book from "./Book";
import Error from "./Error";

function Search(props) {
  const [searchResult, setSearchResult] = useState([]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const search = async () => {
      const result = await API.search(inputValue, 20);
      if (Array.isArray(result)) {
        setSearchResult(result);
      } else {
        setSearchResult([]);
      }
    };

    const searchTimeout = setTimeout(() => {
      if (inputValue) {
        search();
      }
    }, 500);
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [inputValue]);

  function searchInputHandler(e) {
    setInputValue(e.target.value);
  }

  let searchResultBooks;

  
  if (searchResult.length === 0) {
    searchResultBooks = (
      <Error title="Error 404" msg="Sorry we couldn't find this item"></Error>
    );
  } else {
    searchResultBooks = searchResult.map((myBook) => (
      <li key={myBook.id}>
        <Book book={myBook}></Book>
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
