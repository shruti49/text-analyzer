import React, { useState } from "react";
import { About } from "./MyComponents/About";
import { Home } from "./MyComponents/Home";
import { Navbar } from "./MyComponents/Navbar";
import { Alert } from "./MyComponents/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

	const [alert, setAlert] = useState(null);

	const [color, setColor] = useState("#ffffff");

	const handleChangeColor = (e) => {
		removeBodyClasses();
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

	const removeBodyClasses = () => {
		document.body.classList.remove("bg-light");
		document.body.classList.remove("bg-dark");
		document.body.classList.remove("bg-primary");
		document.body.classList.remove("bg-success");
		document.body.classList.remove("bg-warning");
		document.body.classList.remove("bg-danger");
		setColor("#ffffff");
		document.body.style.backgroundColor = "";
	};

	const modeToggler = (cls) => {
		removeBodyClasses();
		if (cls === "dark") {
			setMode("light");
			document.body.style.backgroundColor = "#ffffff";
			showAlert("Dark Mode has been disabled", "success");
			document.title = "Text Analyzer - Light Mode";
		} else if (cls === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#343a40";
			showAlert("Dark Mode has been enabled", "success");
			document.title = "Text Analyzer - Dark Mode";
		} else {
			document.body.classList.add(`bg-${cls}`);
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
					<Home mode={mode} showAlert={showAlert} heading="Enter the text to analyze" />
				</Route>
				<Route exact path="/about">
					<About mode={mode} heading="About Us" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
