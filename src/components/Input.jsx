import PropTypes from 'prop-types';

export const Input = ({ type, name, placeholder, register }) => {
	return (
		<input type={type} name={name} placeholder={placeholder} {...register(name)} />
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	register: PropTypes.func,
};
