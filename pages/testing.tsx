import React, { useState } from "react";
import { CryptoCards, Navbar, TestingForm } from "../components";
import styles from "../styles/pages/testing.module.scss";
interface testingProps {}

const testing: React.FC<testingProps> = ({}) => {
	const [sideBarPressed, setSideBarPressed] = useState(false)
	return (
		<>
			<Navbar setSideBarPressed={setSideBarPressed} sideBarPressed={sideBarPressed}/>

			<div className={styles.container} style={{ marginTop: "100px"}}>
				<CryptoCards sideBarPressed={sideBarPressed} />
				<TestingForm />
			</div>
		</>
	);
};
export default testing;
