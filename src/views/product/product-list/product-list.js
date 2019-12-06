import React, { Component } from "react";
import { Link, useHistory  } from "react-router-dom";

const ButtonHook = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/');
	};

	return (
		<button type="button" onClick={ handleClick }>Go home</button>
	);
};

class Products extends Component {
	constructor( props ) {
		super( props );
		console.log('products: ', props);
	}

	render(): React.ReactNode {
		return (
			<div>
				<h2>Products page</h2>
				<ul>
					<li><Link className="App-link" to={ "/products/1" }>Products Detail 1</Link></li>
					<li><Link className="App-link" to={ "/products/2" }>Products Detail 2</Link></li>
					<li><Link className="App-link" to={ "/products/3" }>Products Detail 3</Link></li>
				</ul>
				<ButtonHook></ButtonHook>
			</div>
		);
	}
}

export default Products;
