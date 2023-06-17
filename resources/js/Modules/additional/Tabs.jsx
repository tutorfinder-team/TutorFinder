import { useState } from "react";
import { Tab } from "@headlessui/react";
// import { Link } from "react-router-dom";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Tabs({ data, isOwner }) {
	return (
		<div className='w-full max-w-2xl px-2 sm:px-0'>
			<Tab.Group>
				<Tab.List className='flex space-x-1 rounded-xl bg-primary p-1'>
					{Object.keys(data).map((elm) => (
						<Tab
							key={elm}
							className={({ selected }) =>
								classNames(
									"w-full rounded-lg py-2.5 text-sm leading-5 text-primary outline-none",
									selected
										? "bg-white font-semibold"
										: "text-gray-100 hover:bg-white/[0.12] hover:text-white font-meduim"
								)
							}
						>
							{elm}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className='mt-2'>
					{isOwner && (
						<Tab.Panel className='rounded-xl bg-white'>
							<List contents={data["Upcoming sessions"]} />
						</Tab.Panel>
					)}
					<Tab.Panel className='rounded-xl bg-white'>
						<List contents={data["Posted sessions"]} />
					</Tab.Panel>
					<Tab.Panel className='rounded-xl bg-white'>
						<AboutMe />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

function List({ contents }) {
	return (
		<ul>
			{contents.map((content) => (
				<li
					key={content._id}
					className='relative rounded-xl p-3 mb-1 hover:bg-gray-100'
				>
					<h3 className='text-sm font-medium leading-5'>
						{content.title}
					</h3>

					<ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
						<li>{content.subscribers.length} Subsribers</li>
						<li>&middot;</li>
						<li>Schedueled for {content.date.split("T")[0]}</li>
						<li>&middot;</li>
						<li>Posted at {content.createdAt.split("T")[0]}</li>
					</ul>

					{/* <Link
						to={`/session/${content._id}`}
						className='absolute inset-0 rounded-md'
					/> */}
				</li>
			))}
		</ul>
	);
}

function AboutMe({ data }) {
	return <>Youssef</>;
}
