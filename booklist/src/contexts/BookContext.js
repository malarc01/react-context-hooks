import React, { createContext, useState, useReducer } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{ title: 'The Shock Doctrine', author: 'Naomi Campbell', id: 1 },
		{ title: 'Freakonomics', author: 'Levit Stephen', id: 2 }
	]);

	const addBook = (title, author) => {
		setBooks([ ...books, { title: title, author: author, id: uuid() } ]);
	};

	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	return <BookContext.Provider value={{ books, addBook, removeBook }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
