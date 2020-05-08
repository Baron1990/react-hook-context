import  React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  } 
  const [books, dispatch] = useReducer(bookReducer, [
    { title: '倚天屠龍記', author: 'Baron', id: uuid() },
    { title: '神鵰俠侶', author: 'Zora', id: uuid() },
    { title: '金瓶梅', author: 'Tom', id: uuid() },
    { title: '三國演義', author: 'Mega', id: uuid() },
  ],() => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : [];
  }) 

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  },[books])
  
  return ( 
    <BookContext.Provider value={{ books, dispatch }}>
      { props.children }
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;  