import * as yup from 'yup';

export const fieldsScheme = yup.object().shape({
	email: yup
		.string()
		.email('Неверный email! Пожалуйста, введите корректный адрес электронной почты.')
		.required('Email обязателен!'),
	password: yup
		.string()
		.matches(
			/^(?=.*[A-Z])(?=.*\d)(?=.*[\w])[A-Za-z\d\w]{8,16}$/,
			'Пароль должен содержать хотя бы одну заглавную букву, одну цифру и быть длиной от 8 до 16 символов.',
		)
		.required('Пароль обязателен!'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
		.required('Подтверждение пароля обязательно!'),
});
