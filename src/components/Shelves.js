import React from 'react';
import BookShelf from './BookShelf';

function Shelves(props) {
    return (
        <div className='list-books-content'>
            <BookShelf books={props.books} shelf="currentlyReading" shelfTitle="Currently Reading" changeShelf={props.changeShelf}/>
            <BookShelf books={props.books} shelf="wantToRead" shelfTitle="Want to Read" changeShelf={props.changeShelf}/>
            <BookShelf books={props.books} shelf="read" shelfTitle="Read" changeShelf={props.changeShelf}/>

        </div>
    );
}

export default Shelves;