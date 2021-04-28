import axiosInstance from "./axios";

//key was a param
export const getAllCryptos = async () => {
	const response = await axiosInstance.get("main/cryptos/");

	console.log("this is the response", response);

	if (response.status !== 200) {
		throw new Error("something went wrong.");
	}

	return response.data;
};
