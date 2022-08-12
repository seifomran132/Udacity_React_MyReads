import React from "react";
import Header from "../components/Header";
import Shelves from "../components/Shelves";
import { Link } from "react-router-dom";
function HomeScreen(props) {
  return (
    <div>
      <Header />
      <Shelves books={props.allBooks} ShelfChanger={props.ShelfChanger} />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
//onClick={() => setShowSearchpage(!showSearchPage)}
export default HomeScreen;
