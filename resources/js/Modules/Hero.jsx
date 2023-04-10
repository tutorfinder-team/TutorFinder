import { BiLinkExternal } from "react-icons/bi";
import Draggable from "./parts/Draggable";
import SearchBar from "./additional/SearchBar";
import { Link } from "@inertiajs/react";

function Filter({ text, active }) {
	let effect =
		"bg-gray-900/30 text-white hover:bg-white hover:text-gray-900 duration-150";
	if (active) {
		effect = "font-semibold bg-white text-gray-900";
	}
	return (
		<button
			className={`font-light rounded-full px-6 py-2 text-sm sm:text-lg ${effect}`}
		>
			{text}
		</button>
	);
}

export default function Hero({ isLogged }) {
	return (
		<div className='relative hero text-white'>
			<div className='container relative z-50 content py-[6vh] px-8 max-w-2xl mx-auto'>
				<Draggable className='filters flexible-center flex-wrap gap-4 mb-[4vh]'>
					<Filter text='Discover' active />
					<Filter text='Coding' />
					<Filter text='Algebra' />
					<Filter text='Design' />
				</Draggable>
				{!isLogged && (
					<h1 className='typography-hero font-semibold text-center mb-[4vh]'>
						<span>Find the best teachers and learn</span>
						<br />
						<span> the skill you want to acquire</span>
					</h1>
				)}
				<div className='grid place-content-center mb-[4vh]'>
					<SearchBar />
				</div>
				<div
					className={`flexible-center font-light ${
						isLogged && "flex-col"
					} gap-1`}
				>
					{isLogged ? (
						<p>
							Do you want to teach something?
							<br />
						</p>
					) : (
						<span>Sign in to</span>
					)}
					<div className='flexible gap-1'>
						post a tutoring session{" "}
						<Link
							href={isLogged ? `session/new` : `/signin`}
							className='flexible gap-1 text-primary cursor-pointer font-medium'
						>
							now <BiLinkExternal />
						</Link>{" "}
					</div>
				</div>
			</div>
			<div className='absolute top-0 left-0 w-full h-full bg-gray-900/60 z-0'></div>
		</div>
	);
}
