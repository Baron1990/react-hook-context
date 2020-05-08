import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from '../components/BookDetails'

const BookList = () => {
  const { books } = useContext(BookContext)
  return books.length ? ( 
    <div className="book-list">
      <ul>
        {books.map(book => {
          return(
            <BookDetails book={ book } key={book.id}/>
          )
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      <h1>No books to read. Hello free time :)</h1>
    </div>
  )
}
 
export default BookList;