import React from "react";

export default function Avatar({ img, name, className, ...options }) {
	return (
		<img
			src={
				img
					? img
					: `https://api.dicebear.com/5.x/initials/svg?seed=${
							name.split(" ")[0]
					 }%20${name.split(" ")[1]}`
			}
			alt={name}
			className={className}
			{...options}
		/>
	);
}
