import { Formik } from "formik";
import * as Yup from 'yup'
import React from "react";
import styles from './TestingForm.module.scss'
import { MultiRangeSlider } from "../MultiRangeSlider/MultiRangeSlider";

const formSchema = Yup.object({
	rsi: Yup.number().max(100).min(100).optional(),
	rsi2: Yup.number().max(100).min(100).optional(),
	bollX: Yup.boolean().required(),
	rsiOver: Yup.boolean().required()
})

interface TestingFormProps {}

export const TestingForm: React.FC<TestingFormProps> = ({}) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.outerParent}>


				<Formik
					initialValues={{
						rsi:50,
						rsi2:50,
						bollX:false,
						rsiOver:false
					}}
					validationSchema={formSchema}
					onSubmit={(data) =>
						console.log("the data is: ", data.rsi)
					}
				>
				{({handleSubmit}) => {
					return (
						<form className={styles.form} onSubmit={(e) => {
							console.log('he')
							e.preventDefault();
							console.log("ll")
							handleSubmit();
							console.log("0")
						}}>
							<h2>Testing Form</h2>
							<MultiRangeSlider min={0} max={100}/>	
							<br/><br/>
							<button type='submit'>
								{/* <Link href="signup"> */}
									<a>Submit</a>
								{/* </Link> */}
							</button>
						</form>
					)
				}}
				
				</Formik>
				</div>
			</div>	
		</>
	);
};
