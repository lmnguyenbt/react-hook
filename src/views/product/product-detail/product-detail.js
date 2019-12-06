import React, { Component } from 'react';
import { useHistory  } from "react-router-dom";

const ButtonHook = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/products');
	};

	return (
		<button type="button" onClick={ handleClick }>Go home</button>
	);
};

class ProductsDetail extends Component {
	constructor( props ) {
		super( props );
		console.log('product detail: ', props);
	}

	render(): React.ReactNode {
		return (
			<div>
				<h2>Product Detail 1</h2>
				<ButtonHook></ButtonHook>
			</div>
		);
	}
}

export default ProductsDetail;
