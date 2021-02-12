import React from "react";
import { CryptoCards, Navbar, TestingForm } from "../components";
import styles from "../styles/pages/testing.module.scss";
interface testingProps {}

const testing: React.FC<testingProps> = ({}) => {
	return (
		<>
			<Navbar />

			<div className={styles.container} style={{ marginTop: "80px" }}>
				<CryptoCards />
				<TestingForm />
			</div>
		</>
	);
};
export default testing;
