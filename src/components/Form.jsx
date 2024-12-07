import styles from './form.module.css';
import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from './Input';
import { fieldsScheme } from '../validationForm';

const onSubmit = (formData) => {
	console.log(formData);
};

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(fieldsScheme),
		mode: 'onChange',
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	const submitButtonRef = useRef(null);

	const validateFields = () => {
		const isValid =
			!emailError &&
			!passwordError &&
			!confirmPasswordError &&
			getValues.email &&
			getValues.password &&
			getValues.confirmPassword &&
			getValues.password === getValues.confirmPassword;
		return isValid;
	};

	useEffect(() => {
		if (validateFields()) {
			submitButtonRef.current.focus();
		}
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<h2>Введите свои данные!</h2>
			{emailError && <div className={styles.validationError}>{emailError}</div>}
			<Input
				type={'email'}
				name={'email'}
				placeholder={'Email'}
				register={register}
			/>
			{passwordError && (
				<div className={styles.validationError}>{passwordError}</div>
			)}
			<Input
				type={'password'}
				name={'password'}
				placeholder={'Пароль'}
				register={register}
			/>
			{confirmPasswordError && (
				<div className={styles.validationError}>{confirmPasswordError}</div>
			)}
			<Input
				type={'password'}
				name={'confirmPassword'}
				placeholder={'Повторите пароль'}
				register={register}
			/>
			<button
				type="submit"
				disabled={!!emailError || !!passwordError || !!confirmPasswordError}
				ref={submitButtonRef}
			>
				Зарегистрироваться
			</button>
		</form>
	);
};
