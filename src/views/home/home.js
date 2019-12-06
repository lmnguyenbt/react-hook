import React, { Component, useState, useEffect  } from 'react';
import { Link } from "react-router-dom";

/**
 * Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
 * Hooks are functions that let you “hook into” React state and lifecycle features from function components.
 * Hooks don’t work inside classes - they let you use React without classes.
 *
 * @returns {*}
 * @constructor
 */
const Function = () => {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
};

class Home extends Component {
	constructor( props ) {
		super( props );
		console.log('home: ', props);
	}

	render(): React.ReactNode {
		return (
			<div>
				<h2>Home page</h2>
				<Link className="App-link" to={'/products'}>Products</Link>

				<Function/>
			</div>
		);
	}
}

export default Home;
