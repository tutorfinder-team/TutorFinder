import React, { useRef } from "react";

const TextArea = ({
	label,
	LabelIcon,
	name,
	Icon,
	placeholder,
	width = "w-full",
	height = "h-40",
	onChange: saveFormData,
	onClickIcon: handleClickIcon,
	options = {},
}) => {
	const textarea = useRef();
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
					options.parentStyle
						? options.parentStyle
						: `cursor-text rounded-lg bg-gray-100 p-3 ${width} ${height} flex items-center gap-2 mt-2 mb-5 hoverMode`
				}
				onClick={() => textarea.current.focus()}
			>
				{Icon && handleClickIcon && (
					<Icon
						size={18}
						color='gray'
						className='cursor-pointer'
						onClick={() => handleClickIcon()}
					/>
				)}
				<textarea
					name={name}
					id={name}
					placeholder={placeholder}
					ref={textarea}
					className='resize-none w-full h-full bg-transparent outline-none text-sm placeholder:font-light'
					onFocus={(e) => {
						e.target.parentNode.classList.add("focusMode");
					}}
					onBlur={(e) => {
						e.target.value === "" &&
							e.target.parentNode.classList.remove("focusMode");
					}}
					onChange={(e) => {
						saveFormData(e.target.name, e.target.value);
					}}
					{...options.value}
					{...options.className}
				></textarea>
			</div>
		</div>
	);
};

export default TextArea;
