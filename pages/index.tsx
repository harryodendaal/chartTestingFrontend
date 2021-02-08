import React, { useEffect, useState } from "react";
import axiosInstance from "../api/api";
import { useRouter } from "next/router";
import useCheckSignedHaveIn from "../hooks/useCheckHaveSignedIn";
import { Navbar } from "../components/Navbar/Navbar";
interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
	const router = useRouter();

	const [email, setEmail] = useState<string | null>();

	useEffect(() => {
		const [email] = useCheckSignedHaveIn();
		if (!email) {
			router.push("/signin");
		}
		setEmail(email);
	}, []);

	const logout = () => {
		console.log("hello");
		const response = axiosInstance.post("user/logout/blacklist/", {
			refresh_token: localStorage.getItem("refresh_token"),
		});
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");

		axiosInstance.defaults.headers["Authorization"] = null;
		router.push("/signin");
	};

	return (
		<>
			<Navbar />
			{/* <h1>Hello {email}</h1>
			<button onClick={logout}>Press me</button>
			Hello display portfolio and stuff: just show button which says show than
			navbar has two buttons testing and trading thats all folks */}
		</>
	);
};

export default index;
