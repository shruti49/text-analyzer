import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const Home = (props) => {
	const [text, setText] = useState("");

	const inputChange = (e) => {
		setText(e.target.value);
	};

	const handleChange = (e) => {
		if (text !== "") {
			switch (e.target.value) {
				case "lowercase":
					setText(text.toLowerCase());
					props.showAlert("Changed to lowecase!", "success");
					break;
				case "uppercase":
					setText(text.toUpperCase());
					props.showAlert("Changed to upercase!", "success");
					break;
				case "capitalize":
					//let arr = text.split(" ");
					let text1 = text.toLowerCase();
					var arr = [];
					arr.push(text1[0].toUpperCase());
					for (var j = 1; j < text1.length; j++) {
						if (text1[j - 1] === " " || text1[j - 1] === "\n") {
							arr.push(text1[j].toUpperCase());
						} else {
							arr.push(text1[j]);
						}
					}

					let newText = arr.toString().replaceAll(",", "");
					setText(newText);
					props.showAlert("Text capitalized successfully!", "success");
					break;
				default:
					break;
			}
		}
	};

	const handleclearText = () => {
		if (text.length > 0) {
			setText("");
			props.showAlert("Textarea cleared!", "success");
		}
	};

	const handleCopyText = () => {
		if (text.length > 0) {
			/* Get the text field */
			var copyText = document.getElementById("analyseArea");

			/* Select the text field */
			copyText.select();
			copyText.setSelectionRange(0, 99999); /* For mobile devices */

			/* Copy the text inside the text field */
			navigator.clipboard.writeText(copyText.value);
			props.showAlert("Copied to Clipboard!", "success");
		}
	};

	const handleExtraSpaces = () => {
		if (text.length > 0) {
			let newText = text.split(/[ ] + /);
			setText(newText.join(" "));
			props.showAlert("Extra spaces has been removed!", "success");
		}
	};

	return (
		<div>
			<div className="container mt-3">
				<h2 className={`mb-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
					{props.heading}
				</h2>
				<textarea
					className="form-control"
					type="text"
					value={text}
					onChange={inputChange}
					rows="5"
					id="analyseArea"
				/>
				<div className="row">
					<div className="form-group col-md-4 mt-3">
						<select className="form-select form-select-md" onChange={handleChange}>
							<option>Select any case</option>
							<option value="uppercase">Uppercase</option>
							<option value="lowercase">Lowercase</option>
							<option value="capitalize">Capitalize</option>
						</select>
					</div>
					<div className="form-group col">
						<button className="btn btn-secondary mt-3" onClick={handleclearText}>
							Clear Text
						</button>
						<button className="btn btn-secondary mt-3 mx-3" onClick={handleCopyText}>
							Copy Text
						</button>
						<button className="btn btn-secondary mt-3" onClick={handleExtraSpaces}>
							Remove Extra Spaces
						</button>
					</div>
				</div>
			</div>

			{text.length > 0 && (
				<div className="container mt-3">
					<h4 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
						Text Summary
					</h4>
					<div className="d-flex">
						<h6 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
							Characters - {text.length}
						</h6>
						<h6 className={`mx-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
							Words - {text.split(" ").filter((element) => element.length !== 0).length}
						</h6>
						<h6 className={`mx-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
							Lines - {text.split(/\r?\n|\r/).length}
						</h6>
					</div>

					<h4 className={`mt-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
						Text Viewer
					</h4>
					<p
						className={`border p-2 text-${props.mode === "dark" ? "light" : "dark"}`}
					>
						{text}
					</p>
				</div>
			)}
		</div>
	);
};

Home.propTypes = {
	heading: PropTypes.string.isRequired,
	mode: PropTypes.string,
};

Home.defaultProps = {
	heading: "Word Counter"
}