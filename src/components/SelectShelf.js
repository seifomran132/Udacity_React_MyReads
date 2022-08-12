import React from "react";

function SelectShelf(props) {
  function ShelfChanger(e) {
    props.ShelfChanger(props.book, e.target.value);
  }

  

  
    let shelfValue = "none";
    
    if(props.books.find((book)=>book.id === props.book.id)) {
      shelfValue = props.books.find((book)=>book.id === props.book.id).shelf;
    }
    

  return (
    <select onChange={ShelfChanger} defaultValue={shelfValue}>
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
}

export default SelectShelf;
