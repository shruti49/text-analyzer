import React, { useState } from "react";
import { About } from "./MyComponents/About";
import { Home } from "./MyComponents/Home";
import { Navbar } from "./MyComponents/Navbar";
import { Alert } from "./MyComponents/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("Light"); //whether dark mode is enabled or not

	const [alert, setAlert] = useState(null);

	const [color, setColor] = useState("#000000");

	const handleChangeColor = (e) => {
		setColor(e.target.value);
		document.body.style.backgroundColor = e.target.value;
	};

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const modeToggler = () => {
		if (mode === "Light") {
			setMode("Dark");
			document.body.style.backgroundColor = "#343a40";
			showAlert("Dark Mode has been enabled", "success");
			document.title = "Text Analyzer - Dark Mode";
		} else {
			setMode("Light");
			document.body.style.backgroundColor = "#ffffff";
			showAlert("Dark Mode has been disabled", "success");
			document.title = "Text Analyzer - Light Mode";
		}
	};

	return (
		<Router>
			<Navbar
				title="Text Analyzer"
				togglMode={modeToggler}
				mode={mode}
				changeColor={handleChangeColor}
				color={color}
			/>
			<Alert alert={alert} />
			<Switch>
				<Route exact path="/">
					<Home mode={mode} showAlert={showAlert} heading="Enter the text to analyze"/>
				</Route>
				<Route exact path="/about">
					<About mode={mode} heading="About Us"/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
