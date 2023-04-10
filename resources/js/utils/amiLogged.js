import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function amiLogged() {
	const navigate = useNavigate();
	const { user, userData } = useSelector((state) => state.auth);
	useEffect(() => {
		if (!user && !userData) {
			toast.info("You must be logged in to access this page");
			navigate("/signin");
		}
	}, []);
	if (!user || !userData) return false;
	return { user, userData };
}
