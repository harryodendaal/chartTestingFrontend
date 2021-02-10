import React, { InputHTMLAttributes } from "react";
import styles from "./TextInput.module.scss";
import { useField } from "formik";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	label?: string;
	textarea?: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
	name,
	label,
	textarea = false,
	...props
}) => {
	const [field, meta] = useField(name);
	return (
		<div>
			{textarea ? (
				<textarea required className={styles.input} {...field} />
			) : (
				<input required className={styles.input} {...field} {...props} />
			)}
			{meta.error && meta.touched && (
				<p className={styles.error}>{meta.error}</p>
			)}
			{label && (
				<label className={styles.label} htmlFor={name}>
					{label}
				</label>
			)}
		</div>
	);
};

export default TextInput;
