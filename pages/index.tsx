import React, { useState, useEffect } from "react";
import axiosInstance from "../api/api";
import { useRouter } from "next/router";
interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
	const router = useRouter();

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
		<h1>
			<button onClick={logout}>Press me</button>
			Hello display portfolio and stuff: just show button which says show than
			navbar has two buttons testing and trading thats all folks
		</h1>
	);
};

export default index;
