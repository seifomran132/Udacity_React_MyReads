import React from 'react';
import BookShelf from './BookShelf';

function Shelves(props) {
    return (
        <div className='list-books-content'>
            <BookShelf books={props.books} shelf="currentlyReading" shelfTitle="Currently Reading"/>
            <BookShelf books={props.books} shelf="wantToRead" shelfTitle="Want to Read"/>
            <BookShelf books={props.books} shelf="read" shelfTitle="Read"/>

        </div>
    );
}

export default Shelves;