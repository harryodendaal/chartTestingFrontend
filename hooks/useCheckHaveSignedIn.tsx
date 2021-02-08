export default function useCheckSignedHaveIn() {
	const email = localStorage.getItem("user");
	return [email];
}
