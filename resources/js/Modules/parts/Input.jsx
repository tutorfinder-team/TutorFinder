import React, { useRef } from "react";

const Input = ({
	label,
	LabelIcon,
	type = "text",
	name,
	Icon,
	placeholder,
	width = "w-full",
	onChange: saveFormData,
	onClickIcon: handleClickIcon,
	options = {},
}) => {
	const input = useRef();
	return (
		<div>
			{label && (
				<label
					htmlFor={name}
					className='flexible gap-1 font-bold text-sm m-1 mb-3'
				>
					{LabelIcon && <LabelIcon color='red' size={18} />}
					{label}
				</label>
			)}
			<div
				className={
					options?.parentStyle
						? options?.parentStyle
						: `cursor-text rounded-lg dark:bg-darker dark:text-gray-300 bg-gray-100 p-3 ${width} ${options?.height} flex items-center gap-2 mt-2 mb-5 hoverMode`
				}
				onClick={() => input.current.focus()}
			>
				{Icon && !handleClickIcon && (
					<Icon size={options.iconSize || 18} color='gray' />
				)}
				{Icon && handleClickIcon && (
					<Icon
						size={18}
						color='gray'
						className='cursor-pointer'
						onClick={() => handleClickIcon()}
					/>
				)}
				<input
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
					ref={input}
					className='w-full bg-transparent outline-none text-sm placeholder:font-light'
					onFocus={(e) => {
						e.target.parentNode.classList.add("focusMode");
					}}
					onBlur={(e) => {
						e.target.value === "" &&
							e.target.parentNode.classList.remove("focusMode");
					}}
					onChange={(e) =>
						saveFormData(e.target.name, e.target.value)
					}
					maxLength={options?.max || 30}
					minLength={options?.min || 4}
					value={options?.value}
					{...options.className}
					min={options?.min}
					max={options?.max}
				/>
			</div>
		</div>
	);
};

export default Input;
