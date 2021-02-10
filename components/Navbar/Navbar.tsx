import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./NavbarData";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";
import useCheckSignedHaveIn from "../../hooks/useCheckHaveSignedIn";
import axiosInstance from "../../api/axios";
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
	const [sidebar, setSidebar] = useState(false);
	const router = useRouter();
	const [email, setEmail] = useState<string | null>();

	const showSidebar = () => {
		setSidebar(!sidebar);
	};

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
			<IconContext.Provider value={{ color: "#fff" }}>
				<div className={styles.navbar}>
					<a href="#" className={styles.menu_bars}>
						<FaBars onClick={showSidebar} />
					</a>
					<h3>Hello {email}</h3>
				</div>
				<nav className={sidebar ? styles.nav_menu_active : styles.nav_menu}>
					<ul className={styles.nav_menu_items}>
						<li className={styles.navbar_toggle}>
							<a href="#" className={styles.menu_bars}>
								<AiOutlineClose onClick={showSidebar} />
							</a>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={styles.nav_text}>
									<a href={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</a>
								</li>
							);
						})}
						<li className={styles.nav_text}>
							<a onClick={logout} className={styles.special}>
								<span>LOGOUT</span>
							</a>
						</li>
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
};
