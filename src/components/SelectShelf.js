import React from "react";

function SelectShelf(props) {
  function ShelfChanger(e) {
    props.ShelfChanger(props.book, e.target.value);
  }

  return (
    <select onChange={ShelfChanger} defaultValue="none">
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
