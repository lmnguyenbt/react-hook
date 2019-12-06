import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// routes config
import routes from "../routers";

class Layout extends Component {

	render(): React.ReactNode {
		return (
			<div>
				<header className="App-header">
					<h2>Header</h2>
				</header>

				<section className="App-container">
					<Switch>
						{ routes.map( ( route, i ) => (
							<Route key={i} path={ route.path } exact={ route.exact } render={ props => (
								<route.component { ...props } />
							) }/>
						) ) }
					</Switch>
				</section>

				<footer className="App-footer">
					<h2>Footer</h2>
				</footer>
			</div>
		);
	}
}

export default Layout;
