import React from "react";
import BookShelf from "./BookShelf";

function Shelves(props) {
  return (
    <div className="list-books-content">
      <BookShelf
        books={props.books}
        shelf="currentlyReading"
        shelfTitle="Currently Reading"
        ShelfChanger={props.ShelfChanger}
      />
      <BookShelf
        books={props.books}
        shelf="wantToRead"
        shelfTitle="Want to Read"
        ShelfChanger={props.ShelfChanger}
      />
      <BookShelf
        books={props.books}
        shelf="read"
        shelfTitle="Read"
        ShelfChanger={props.ShelfChanger}
      />
    </div>
  );
}

export default Shelves;
