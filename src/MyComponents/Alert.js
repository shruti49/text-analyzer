import React from "react";
import { useSelector } from "react-redux";

export const Alert = () => {
	const alert = useSelector(state => state.alert);

	return (
		<div style={{ height: "50px" }}>
			{alert && (
				<div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
					<strong>{alert.msg}</strong>
				</div>
			)}
		</div>
	);
};
