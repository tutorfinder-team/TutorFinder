import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";

const options = [
	{
		name: "Online",
	},
	{
		name: "In-person",
	},
];

export default function Radio({ setType }) {
	const [selected, setSelected] = useState(options[0]);
	useEffect(() => {
		setType(selected);
	}, [selected]);
	return (
		<div className='mb-5'>
			<RadioGroup value={selected} onChange={setSelected}>
				<div className='grid grid-cols-2 gap-3'>
					{options.map((option) => (
						<RadioGroup.Option
							key={option.name}
							value={option}
							className={({ active, checked }) =>
								`${
									checked
										? "bg-primary text-white"
										: "bg-white border border-apply  shadow text-darker dark:bg-darker dark:text-white"
								}
                    relative flex cursor-pointer rounded-xl px-4 py-3 focus:outline-none`
							}
						>
							{({ active, checked }) => (
								<>
									<div className='flex w-full items-center justify-between'>
										<div className='text-sm'>
											<RadioGroup.Label
												as='p'
												className={`font-medium ${
													checked
														? "text-white"
														: "dark:text-white text-dark"
												}`}
											>
												{option.name}
											</RadioGroup.Label>
										</div>
										{checked && (
											<div className='shrink-0 text-white'>
												<CheckIcon className='h-4 w-4' />
											</div>
										)}
									</div>
								</>
							)}
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
		</div>
	);
}

function CheckIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' {...props}>
			<circle cx={12} cy={12} r={12} fill='#fff' opacity='0.3' />
			<path
				d='M7 13l3 3 7-7'
				stroke='#fff'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
