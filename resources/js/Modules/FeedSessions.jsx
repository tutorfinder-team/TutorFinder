import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../features/session/sessionSlice";
import { getSessions } from "../features/session/sessionSlice";
import Filter from "./parts/Filter";
import SessionMd from "./parts/SessionMd";
import Spinner from "./parts/Spinner";
import { toast } from "react-toastify";
// import { useSearchParams } from "react-router-dom";

export default function FeedSessions() {
	/*
	TODO:
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams);
	*/
	const dispatch = useDispatch();
	const { sessions, isError, message, isLoading } = useSelector(
		(state) => state.session
	);

	useEffect(() => {
		dispatch(getSessions());
		if (isError) {
			toast.error(message);
		}
		return () => {
			dispatch(reset());
		};
	}, [isError, message, dispatch]);

	return (
		<div className='container my-6'>
			<Filter />
			<h1 className='font-bold text-lg text-center mb-8'>
				Check out some of today's sessions
			</h1>
			<div
				className={`sessionsList relative grid place-items-center gap-8
	  2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2`}
			>
				{isLoading ? (
					<Spinner className='text-gray-900 w-20 h-20 absolute inset-x-0 mx-auto' />
				) : sessions.length > 0 ? (
					sessions.map((session) => {
						return (
							<SessionMd
								key={session._id}
								id={session._id}
								title={session.title}
								tutor={session.tutor}
								date={session.date.split("T")[0]}
								location={session.location}
								placesLeft={
									session.maxSubscribers -
									session.subscribers.length
								}
								tags={session.tags}
							/>
						);
					})
				) : (
					<h1>No sessions found</h1>
				)}
			</div>
		</div>
	);
}
