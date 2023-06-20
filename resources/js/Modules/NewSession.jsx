import React from "react";
import Input from "./parts/Input";
import TextArea from "./additional/TextArea";
import { sessionFormData } from "../data/formData";
import ErrorFeedback from "./parts/ErrorFeedback";
import { BiError } from "react-icons/bi";
import { useValidate } from "../utils/useValidate";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ButtonWait from "./parts/ButtonWait";
import Radio from "../Components/Radio";
import { reset } from "../features/auth/authSlice";
import { reset as sessionReset } from "../features/session/sessionSlice";
import { toast } from "react-toastify";
import { createSession } from "../features/session/sessionSlice";

export default function NewSession() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [sessionData, setSessionData] = useState({
		title: "",
		tags: "",
		date: "",
		maxSubscribers: 0,
		type: "Online",
		location: "",
		description: "",
	});

	const [errors, setErrors] = useState({
		msgs: [],
		name: [],
	});

	const { user } = useSelector((state) => state.auth);
	const { session, isLoading, isError, isAdded, message } = useSelector(
		(state) => state.session
	);

	useEffect(() => {
		if (!user) {
			navigate("/");
			toast.info("You need to be logged in to post a session");
		}
		if (isError) {
			toast.error(message);
		}
		if (isAdded) {
			toast.success(message);
			navigate("/");
		}
		dispatch(sessionReset());
		dispatch(reset());
	}, [user, session, isAdded, isError, message, navigate, dispatch]);

	function setType(selected) {
		setSessionData({
			...sessionData,
			type: selected.name,
			location: selected.name === "Online" ? "Online" : "",
		});
	}

	function saveFormData(name, value) {
		setSessionData({ ...sessionData, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		const { errors, msgs } = useValidate(sessionData, "session");
		if (errors.length > 0) {
			setErrors({ name: errors, msgs });
		} else {
			setErrors({ name: [], msgs: [] });
			const sessionCreated = {
				...sessionData,
				maxSubscribers: parseInt(sessionData.maxSubscribers),
				tags: sessionData.tags.split(","),
			};
			dispatch(createSession(sessionCreated));
		}
	}
	return (
		<div className='container grid place-content-center md:mt-20 my-12'>
			<h1 className='font-extrabold text-3xl mb-4'>Post a new session</h1>
			<ErrorFeedback errors={errors.msgs} />
			<form
				onSubmit={(e) => handleSubmit(e)}
				method='post'
				className='w-[80vw] max-w-2xl'
			>
				{sessionFormData.map((v, i, e) => {
					return (
						i % 2 === 0 &&
						e[i] &&
						e[i + 1] && (
							<div
								className='grid grid-cols-1 md:grid-cols-2 gap-x-4'
								key={i + 2}
							>
								<Input
									{...e[i]}
									LabelIcon={
										errors.name.includes(e[i].name) &&
										BiError
									}
									onChange={saveFormData}
								/>
								<Input
									{...e[i + 1]}
									LabelIcon={
										errors.name.includes(e[i + 1].name) &&
										BiError
									}
									onChange={saveFormData}
								/>
							</div>
						)
					);
				})}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
					<Radio type={sessionData.type} setType={setType} />
					{sessionData.type === "In-person" && (
						<Input
							label='Location'
							name='location'
							placeholder='Where whould you host the session'
							LabelIcon={
								errors.name.includes("location") && BiError
							}
							onChange={saveFormData}
						/>
					)}
				</div>
				<div className='grid grid-cols-1 gap'>
					<TextArea
						label='Description'
						name='description'
						placeholder='Describe what the session is about'
						LabelIcon={
							errors.name.includes("description") && BiError
						}
						onChange={saveFormData}
					/>
				</div>
				<ButtonWait
					isLoading={isLoading}
					title='Upload session'
					className='px-10 mb-10'
					white={true}
				/>
			</form>
		</div>
	);
}
