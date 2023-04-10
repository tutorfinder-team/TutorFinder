import React from "react";

export default function ErrorFeedback({ errors }) {
	return (
		<div className='text-red-500 ml-4 text-sm mb-5'>
			{errors.map((error, index) => (
				<li key={index} className='mb-2'>
					{error}
				</li>
			))}
		</div>
	);
}
