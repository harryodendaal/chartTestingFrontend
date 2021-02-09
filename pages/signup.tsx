import React from "react";
import styles from "../styles/signin.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../components/TextInput/TextInput";
import axiosInstance from "../api/api";
import { useRouter } from "next/router";

const formSchema = Yup.object({
	email: Yup.string().required().email(),
	username: Yup.string().required().max(20),
	password: Yup.string().required().min(8),
});

interface signinProps {}

const signup: React.FC<signinProps> = ({}) => {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<div className={styles.outerParent}>
				<Formik
					initialValues={{
						email: "",
						username: "",
						password: "",
					}}
					validationSchema={formSchema}
					onSubmit={(data) =>
						axiosInstance
							.post("user/create/", {
								email: data.email,
								user_name: data.username,
								password: data.password,
							})
							.then((res) => {
								router.push("/");
								console.log(res);
								console.log(res.data);
							})
					}
				>
					{({ handleSubmit }) => {
						return (
							<form onSubmit={handleSubmit}>
								<h2>Register</h2>
								<div className={styles.user_box}>
									<TextInput
										label={"Email"}
										name={"email"}
										// placeholder={"email"}
									/>
								</div>
								<div className={styles.user_box}>
									<TextInput
										label={"username"}
										name={"username"}
										type="text"
										// placeholder={"password"}
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
								<button>
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
		</div>
	);
};

export default signup;
