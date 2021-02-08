import React from "react";
import styles from "../styles/signin.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../components/TextInput/TextInput";
import axiosInstance from "../api/api";
import { useRouter } from "next/router";

const formSchema = Yup.object({
	email: Yup.string().required().email(),
	password: Yup.string().required().min(4),
});

interface signinProps {}

const signin: React.FC<signinProps> = ({}) => {
	const router = useRouter();
	return (
		<div className={styles.outerParent}>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={formSchema}
				onSubmit={(data) => {
					console.log(data);

					axiosInstance
						.post("token/", {
							email: data.email,
							password: data.password,
						})
						.then((res) => {
							localStorage.setItem("access_token", res.data.access);
							localStorage.setItem("refresh_token", res.data.refresh);
							axiosInstance.defaults.headers["Authorization"] =
								"JWT " + localStorage.getItem("access_token");

							router.push("/");
						});
				}}
			>
				{({ handleSubmit }) => {
					return (
						<form onSubmit={handleSubmit}>
							<h2>Login</h2>
							<div className={styles.user_box}>
								<TextInput
									label={"Email"}
									name={"email"}
									// placeholder={"email"}
								/>
							</div>
							<div className={styles.user_box}>
								<TextInput
									label={"password"}
									name={"password"}
									type="password"
									// placeholder={"password"}
								/>
							</div>
							<button type="submit">
								<a>
									<span></span>
									<span></span>
									<span></span>
									<span></span>Submit
								</a>
							</button>
						</form>
					);
				}}
			</Formik>
		</div>
	);
};

export default signin;
