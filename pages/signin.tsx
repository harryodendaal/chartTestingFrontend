import React, { useEffect } from "react";
import styles from "../styles/form/form.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";

import axiosInstance from "../api/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import useCheckSignedHaveIn from "../hooks/useCheckHaveSignedIn";
import TextInput from "../components/TextInput/TextInput";

const formSchema = Yup.object({
	email: Yup.string().required().email(),
	password: Yup.string().required().min(4),
});

interface signinProps {}

const signin: React.FC<signinProps> = ({}) => {
	useEffect(() => {
		const [email] = useCheckSignedHaveIn();
		if (email) {
			router.push("/");
		}
	}, []);

	const router = useRouter();
	return (
		<div className={styles.container}>
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

								// set user email in localstorage aswell
								localStorage.setItem("user", data.email);
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
								<div className={styles.divider}>
									<button type="submit">
										<a>
											<span></span>
											<span></span>
											<span></span>
											<span></span>Submit
										</a>
									</button>
									<button>
										<Link href="signup">
											<a>Register</a>
										</Link>
									</button>
								</div>
							</form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default signin;
