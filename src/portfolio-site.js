import React from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './nav-menu';
import Header from './header';

export default React.createClass({
	render() {
		return (
			<div className="container">
				<NavMenu />
				<Header />
				{ this.props.children }
			</div>
		);
	}
});