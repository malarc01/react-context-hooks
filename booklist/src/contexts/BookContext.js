import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1'



export const BookContext = createContext();

const BookContextProvider = (props) =>{
   const [books, setBooks] = useState([
        {title:'name of the wind', author:"SDGLJ",id:1},
        {title:'name of the wind', author:"SDGLJ",id:2},

    ])

    const addBook = (title, author) =>{
        setBooks([...books,{title:title, author:author, id:uuid()}])

    }

    const removeBooks = (id) =>{
        setBooks(books.filter(book=>book.id !== id))

    }
    
    return(
        <BookContext.Provider value={{books,addBook,removeBooks}}>
        {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider