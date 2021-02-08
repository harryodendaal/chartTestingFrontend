import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
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
					</ul>
				</div>
			</nav>
		</>
	);
};
