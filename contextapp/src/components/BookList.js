import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

// class BookList extends Component {
// 	// only use with class components
// 	static contextType = ThemeContext;

// 	render() {
// 		const { isLightTheme, light, dark } = this.context;

// 		const theme = isLightTheme ? light : dark;

// 		return (
// 			<div className="book-list" style={{ background: theme.ui, color: theme.syntax }}>
// 				<ul style={{ background: theme.ui }}>the way of king</ul>
// 				<ul style={{ background: theme.ui }}>the name of the wind</ul>
// 				<ul style={{ background: theme.ui }}>the final empire</ul>
// 			</div>
// 		);
// 	}
// }

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);

	const { books } = useContext(BookContext);

	const theme = isLightTheme ? light : dark;

	return (
		<div className="book-list" style={{ background: theme.ui, color: theme.syntax }}>
			{books.map((book) => {
				return (
					<li key={book.id} style={{ background: theme.ui }}>
						{book.title}
					</li>
				);
			})}
		</div>
	);
};

export default BookList;
