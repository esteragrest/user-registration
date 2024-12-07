const passwordRegEx = /^(?=.*[A-Z])(?=.*\d)/;
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regEx = /^[\w_]*$/;

export const validationEmail = (value) => {
	let error = '';
	if (!emailRegEx.test(value)) {
		error = 'Неверный email! Пожалуйста, введите корректный адрес электронной почты.';
	}

	return error;
};

export const validationPasswordChange = (value) => {
	let error = '';
	if (!regEx.test(value)) {
		error =
			'Неверный пароль! Пароль должен содержать только латинские буквы, цифры и нижнее подчеркивание.';
	} else if (value.length > 16) {
		error = 'Неверный пароль! Пароль должен содержать до 16 символов.';
	}
	return error;
};

export const validationPasswordBlur = (value) => {
	let error = '';
	if (!passwordRegEx.test(value)) {
		error =
			'Неверный пароль! Пароль должен содержать хотя бы одну заглавную букву и одну цифру.';
	} else if (value.length < 8) {
		error = 'Неверный пароль! Пароль должен содержать не меньше 8 символов.';
	}
	return error;
};

export const validationConfirmPassword = (value, password) => {
	let error = '';
	if (value !== password) {
		error = 'Пароли не совпадают!';
	}
	return error;
};
