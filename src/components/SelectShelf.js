import React from "react";

function SelectShelf(props) {
  function changeShelf(e) {
    props.changeShelf(props.book, e.target.value);
  }

  return (
    <select onChange={changeShelf} defaultValue="none">
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
