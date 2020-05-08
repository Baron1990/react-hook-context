import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  } 
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleAddBookList = () => {
    dispatch({type: 'ADD_BOOK', book: {
      title, author, id: uuid(),
    }})
    setTitle('')
    setAuthor('')
  }
  return (
    <div className="form">
      <input type="text" 
        placeholder="book list" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input type="text" 
        placeholder="author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button onClick={ handleAddBookList }>新增書籍</button>
    </div>
  );
}
 
export default NewBookForm;