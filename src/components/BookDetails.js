import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext)
  return ( 
    <li>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <button className="remove-button" onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>刪除</button>
    </li> 
  );
}
 
export default BookDetails;