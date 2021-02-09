import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import useCheckSignedHaveIn from "../../hooks/useCheckHaveSignedIn";
import axiosInstance from "../../api/api";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
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
		localStorage.removeItem("user");

		axiosInstance.defaults.headers["Authorization"] = null;
		router.push("/signin");
	};

	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.brand_title}>Chart Testing</div>
				<a href="#" className={styles.toggle_button}>
					<span className={styles.bar}></span>
					<span className={styles.bar}></span>
					<span className={styles.bar}></span>
				</a>
				<div className={styles.navbar_links}>
					<ul>
						<li>
							<a href="#">Trading</a>
						</li>
						<li>
							<a href="#">Testing</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
						<button className={styles.button} onClick={logout}>
							Logout
						</button>
					</ul>
				</div>
			</nav>
		</>
	);
};
