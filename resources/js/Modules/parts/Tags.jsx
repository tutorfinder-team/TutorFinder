import React from "react";
import Draggable from "./Draggable";

function Tag({ title }) {
	return (
		<button className='flex gap-2 items-center justify-center rounded-full bg-darker text-white px-4 py-1 whitespace-nowrap'>
			{title.toLowerCase()}
		</button>
	);
}

export default function Tags({ tags }) {
	return (
		<Draggable className='draggable flex gap-2'>
			{tags.map((tag, index) => (
				<Tag key={tag + index} title={tag} />
			))}
		</Draggable>
	);
}
