import React from "react";

function Button({ children, type, isDisabled, version }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

export default Button;
