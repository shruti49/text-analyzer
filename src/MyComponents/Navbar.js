import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export const Navbar = (props) => {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
		>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					{props.title}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
					</ul>
					<form className="d-flex align-items-center">
						<div
							className="bg-success mx-2 rounded"
							style={{ height: "20px", width: "20px" }}
							onClick={() => {
								props.togglMode("success");
							}}
						></div>
						<div
							className="bg-primary mx-2 rounded"
							style={{ height: "20px", width: "20px" }}
							onClick={() => {
								props.togglMode("primary");
							}}
						></div>
						<div
							className="bg-warning mx-2 rounded"
							style={{ height: "20px", width: "20px" }}
							onClick={() => {
								props.togglMode("warning");
							}}
						></div>
						<div
							className="bg-danger mx-2 rounded"
							style={{ height: "20px", width: "20px" }}
							onClick={() => {
								props.togglMode("danger");
							}}
						></div>
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
								onChange={() => {
									props.togglMode(props.mode);
								}}
								type="checkbox"
								id="flexSwitchCheckDefault"
							/>
							<label
								className={`form-check-label text-${
									props.mode === "dark" ? "light" : "dark"
								}`}
								htmlFor="flexSwitchCheckDefault"
							>
								Toggle Mode
							</label>
						</div>
					</form>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	mode: PropTypes.string,
	color:PropTypes.string,
}