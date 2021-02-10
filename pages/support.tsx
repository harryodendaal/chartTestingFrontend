import React from "react";
import styles from "../styles/form/form.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../components/TextInput/TextInput";
import axiosInstance from "../api/axios";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar/Navbar";

const formSchema = Yup.object({
	// name: Yup.string().required().email(),
	// review: Yup.string().required().min(4),
});

interface supportProps {}

const support: React.FC<supportProps> = ({}) => {
	const router = useRouter();
	return (
		<div>
			<Navbar />
			<div className={styles.container} style={{ paddingTop: "80px" }}>
				<div className={styles.outerParent}>
					<Formik
						initialValues={{
							name: "",
							review: "",
						}}
						validationSchema={formSchema}
						onSubmit={(data) => {
							console.log(data);

							axiosInstance
								.post("tasks/sendEmail/", {
									email: localStorage.getItem("user"),
									name: data.name,
									review: data.review,
								})
								.then((res) => {
									alert("The email should of been sent :D. confirm in person?");
									router.push("/");
								});
						}}
					>
						{({ handleSubmit, isSubmitting }) => {
							return (
								<form method="POST" onSubmit={handleSubmit}>
									<h2>Review</h2>
									<div className={styles.user_box}>
										<TextInput
											label={"Name"}
											name={"name"}
											// placeholder={"email"}
										/>
									</div>
									<div className={styles.user_box}>
										<TextInput
											label={"Text"}
											name={"review"}
											type="textarea"
											textarea={true}
											// placeholder={"password"}
										/>
									</div>
									<div className={styles.divider}>
										<button type="submit" disabled={isSubmitting}>
											<a>Submit</a>
										</button>
									</div>
								</form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default support;
