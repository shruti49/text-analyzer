import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./MyComponents/About";
import { Home } from "./MyComponents/Home";
import { Navbar } from "./MyComponents/Navbar";
import { Alert } from "./MyComponents/Alert";

function App() {
	return (
		<Router>
			<Navbar title="Text Analyzer" />
			<Alert />
			<Switch>
				<Route exact path="/">
					<Home heading="Enter the text to analyze" />
				</Route>
				<Route exact path="/about">
					<About heading="About Us" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
