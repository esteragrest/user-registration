import styles from './form.module.css';
import { useState, useRef, useEffect } from 'react';
import * as validFields from '../validationForm';
import { Input } from './Input';

export const Form = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');

	const submitButtonRef = useRef(null);

	const validateFields = () => {
		const isValid =
			!emailError &&
			!passwordError &&
			!confirmPasswordError &&
			email &&
			password &&
			confirmPassword === password;
		return isValid;
	};

	useEffect(() => {
		if (validateFields()) {
			submitButtonRef.current.focus();
		}
	});

	const onEmailChange = ({ target }) => {
		setEmail(target.value);
		setEmailError(validFields.validationEmail(target.value));
	};
	const onEmailBlur = () => {
		setEmailError(validFields.validationEmail(email));
	};
	const onPasswordChange = ({ target }) => {
		setPassword(target.value);
		setPasswordError(validFields.validationPasswordChange(target.value));
	};
	const onPasswordBlur = () => {
		setPasswordError(validFields.validationPasswordBlur(password));
	};
	const onConfirmPasswordBlur = () => {
		setConfirmPasswordError(
			validFields.validationConfirmPassword(confirmPassword, password),
		);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (email && password && confirmPassword) {
			console.log('Email: ', email);
			console.log('Password: ', password);
			console.log('Confirm password: ', confirmPassword);
		}
	};

	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<h2>Введите свои данные!</h2>
			{emailError && <div className={styles.validationError}>{emailError}</div>}
			<Input
				type={'email'}
				name={'email'}
				placeholder={'Email'}
				value={email}
				onChange={onEmailChange}
				onBlur={onEmailBlur}
			/>
			{passwordError && (
				<div className={styles.validationError}>{passwordError}</div>
			)}
			<Input
				type={'password'}
				name={'password'}
				placeholder={'Пароль'}
				value={password}
				onChange={onPasswordChange}
				onBlur={onPasswordBlur}
			/>
			{confirmPasswordError && (
				<div className={styles.validationError}>{confirmPasswordError}</div>
			)}
			<Input
				type={'password'}
				name={'confirmPassword'}
				placeholder={'Повторите пароль'}
				value={confirmPassword}
				onChange={({ target }) => setConfirmPassword(target.value)}
				onBlur={onConfirmPasswordBlur}
			/>
			<button
				type="submit"
				disabled={
					emailError !== '' ||
					passwordError !== '' ||
					confirmPasswordError !== ''
				}
				ref={submitButtonRef}
			>
				Зарегистрироваться
			</button>
		</form>
	);
};
