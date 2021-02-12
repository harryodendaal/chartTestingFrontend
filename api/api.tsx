import axiosInstance from "./axios";

export const getAllCryptos = async (key) => {
	const response = await axiosInstance.get("main/cryptos/");

	console.log("this is the response", response);

	if (response.status !== 200) {
		throw new Error("something went wrong.");
	}

	return response.data;
};
