import React from "react";

export const About = (props) => {
	return (
		<div className="container mt-3">
			<h2 className={`mb-3 text-${props.mode.toLowerCase() === "dark" ? "light" : "dark"}`}>
				{props.heading}
			</h2>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Analyze your text
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>
								Text Analyzer gives you a way to analyze your text quickly and efficiently. Some of
								its features are
							</strong>

							<ul>
								<li>Word/Character/Lines Counter</li>
								<li>Remove Extra Spaces</li>
								<li>Copy text to clipboard</li>
								<li>Clear Text</li>
								<li>Case Conversion</li>
								<li>Text Previewer</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Free to Use
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>It is available for free.You don't have to pay anaything.</strong>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Browser Compatible
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This app works in every browser whether in mobile or laptop.</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
