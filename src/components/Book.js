import React from "react";
import SelectShelf from "./SelectShelf";
import noImage from "../icons/noimage.jpg";

function Book(props) {
  let imageUrl;

  if (props.book.imageLinks) {
    imageUrl = props.book.imageLinks.thumbnail;
  } else {
    imageUrl = noImage;
  }

    return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageUrl}")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <SelectShelf ShelfChanger={props.ShelfChanger} book={props.book} books={props.books} />
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
}

export default Book;
