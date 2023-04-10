import React, { useState } from "react";
import Tabs from "./additional/Tabs";
import Avatar from "./parts/Avatar";
import { toCapital } from "../utils/utils";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserSessions, reset } from "../features/session/sessionSlice";
import { toast } from "react-toastify";
import Spinner from "./parts/Spinner";

export default function Profile({ user, isOwner }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [tabs, setTabs] = useState({});

	const { sessions, isSuccess, isLoading, isError, message } = useSelector(
		(state) => state.session
	);
	useEffect(() => {
		dispatch(getUserSessions());
		if (isError) {
			toast.error(message);
		}
		return () => {
			dispatch(reset());
		};
	}, [isError, dispatch]);

	useEffect(() => {
		if (!isLoading && isSuccess && isOwner) {
			setTabs({
				"Upcoming sessions": [],
				"Posted sessions": sessions,
				About: [],
			});
		}
		if (!isOwner) {
			setTabs({
				"Posted sessions": [],
				About: [],
			});
		}
	}, [isLoading, isSuccess]);

	return (
		<div className='profile container'>
			<div
				className={`profile__header flexible-center lg:flex-row flex-col gap-8 mt-16 mb-8`}
			>
				<div className='profile__header__img'>
					<Avatar
						img={user?.avatar}
						name={user?.fullname}
						className='rounded-full w-[8rem] ring-8 ring-primary/10'
					/>
				</div>
				<div className='profile__header__info flexible flex-col lg:items-start gap-1'>
					<h1 className='font-bold text-4xl'>
						{toCapital(user?.fullname)}
					</h1>
					<h2 className='text-gray-400 ml-1 font-light'>
						{user?.email}
					</h2>
				</div>
				{isOwner && (
					<button className='btn-secondary'>Edit profile</button>
				)}
			</div>
			<div className='profile__body flexible-center'>
				{isLoading ? (
					<Spinner className='w-12 h-12' />
				) : (
					<Tabs data={tabs} isOwner={isOwner} />
				)}
			</div>
		</div>
	);
}
