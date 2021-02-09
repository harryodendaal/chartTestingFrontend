import React from "react";
import { FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper, IoMdPeople, IoMdHelpCircle } from "react-icons/io";

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
		title: "Team",
		path: "/",
		icon: <IoMdPeople />,
	},
	{
		title: "Messages",
		path: "/",
		icon: <FaEnvelopeOpenText />,
	},
	{
		title: "Support",
		path: "/",
		icon: <IoMdHelpCircle />,
	},
];
