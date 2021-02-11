import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

interface testingProps {}

const testing: React.FC<testingProps> = ({}) => {
	return (
		<>
			<Navbar />
			<h1 style={{ marginTop: "80px" }}>
				first we will get the crytpos and show them. Then make them clickable
				and show chart infor
			</h1>
		</>
	);
};
export default testing;
