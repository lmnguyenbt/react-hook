import React, { Component } from "react";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import "./App.css";

// Containers
import Layout from './containers/layout';

class App extends Component {
	render(): React.ReactNode {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" name="Home" render={props => <Layout {...props}/>} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
