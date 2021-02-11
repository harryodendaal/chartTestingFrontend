import React from "react";
import { FaCartPlus, FaMoneyBillWave } from "react-icons/fa";
import { AiFillHome, AiOutlineExperiment } from "react-icons/ai";
import { IoIosPaper, IoMdHelpCircle } from "react-icons/io";
export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <AiFillHome />,
	},
	{
		title: "Reports",
		path: "/",
		icon: <IoIosPaper />,
	},
	{
		title: "Products",
		path: "/",
		icon: <FaCartPlus />,
	},
	{
		title: "subscribe",
		path: "/subscribe",
		icon: <FaMoneyBillWave style={{ fontSize: "30px" }} />,
	},
	{
		title: "testing",
		path: "/testing",
		icon: <AiOutlineExperiment />,
	},
	{
		title: "Support",
		path: "/support",
		icon: <IoMdHelpCircle />,
	},
];
