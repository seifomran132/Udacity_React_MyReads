import React from "react";
import Book from "./Book";

function BookShelf(props) {
  let shelfBooks = props.books
    .filter((book) => book.shelf === props.shelf)
    .map((myBook) => {
      return (
        <li key={myBook.id}>
          <Book book={myBook} ShelfChanger={props.ShelfChanger}></Book>
        </li>
      );
    });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{shelfBooks}</ol>
      </div>
    </div>
  );
}

export default BookShelf;
