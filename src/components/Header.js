import React from "react";

const Header = () => {
	const headerStyles = {
		backgroundColor: "rgba(0,0,0,0.4)",
		color: "#ff6a95",
	};

	return (
		<header style={headerStyles}>
			<div className='container'>
				<h3>FEEDBACK UI</h3>
			</div>
		</header>
	);
};

export default Header;
