import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class BookList extends Component {
	static contextType = ThemeContext;

	render() {
		const { isLightTheme, light, dark } = this.context;

		const theme = isLightTheme ? light : dark;

		return (
			<div className="book-list" style={{ background: theme.ui, color: theme.syntax }}>
				<ul style={{ background: theme.ui }}>the way of king</ul>
				<ul style={{ background: theme.ui }}>the name of the wind</ul>
				<ul style={{ background: theme.ui }}>the final empire</ul>
			</div>
		);
	}
}

export default BookList;
