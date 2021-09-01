import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${props.mode.toLowerCase()} bg-${props.mode.toLowerCase()}`}
		>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					{props.title}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/about">
								About
							</Link>
						</li>
					</ul>
				</div>
				<div className="mx-2 d-flex align-items-center">
					<input
						type="color"
						id="head"
						name="head"
						value={props.color}
						className="mx-2"
						onChange={props.changeColor}
					></input>
					<label
						className={`form-check-label text-${
							props.mode.toLowerCase() === "dark" ? "light" : "dark"
						}`}
						htmlFor="flexSwitchCheckDefault"
					>
						Pick any color
					</label>
				</div>

				<div className="form-check form-switch">
					<input
						className="form-check-input"
						onChange={props.togglMode}
						type="checkbox"
						id="flexSwitchCheckDefault"
					/>
					<label
						className={`form-check-label text-${
							props.mode.toLowerCase() === "dark" ? "light" : "dark"
						}`}
						htmlFor="flexSwitchCheckDefault"
					>
						Enable {props.mode === "Dark" ? "Light" : "Dark"} Mode
					</label>
				</div>
			</div>
		</nav>
	);
};
