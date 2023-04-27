import React from 'react';

const Title = ({ children }) => {
	return (
		<div className="d-flex justify-content-center align-items-center mt-3 fw-bold">
			{children}
			<div className="w-100 px-4">
				<hr className="divide color-medium" />
			</div>
		</div>
	);
};

export default Title;
