import React from "react";
import Spinner from "./Spinner";

export default function ButtonWait({
	isLoading,
	title,
	className,
	onClick,
	white,
}) {
	return (
		<>
			<button
				className={`relative btn-primary ${className}`}
				onClick={onClick ? () => onClick() : null}
			>
				<span className={`${isLoading ? "opacity-0" : "opacity-100"}`}>
					{title}
				</span>

				{isLoading && (
					<Spinner
						className='absolute inset-x-0 bottom-[10px] mx-auto'
						white={white}
					/>
				)}
			</button>
		</>
	);
}
