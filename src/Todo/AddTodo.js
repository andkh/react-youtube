import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.5rem 1rem',
		border: '1px solid #ccc',
		borderRadius: '4px',
		marginBottom: '.5rem',
	},
	input: {
		marginRight: '1rem'
	},
};

function useInputValue(defaultValue = '') {
	const [value, setValue] = useState(defaultValue);

	return {
		bind: {
			value,
			onChange: event => setValue(event.target.value)
		},
		clear: () => setValue(''),
		value: () => value
	}
}

function AddTodo({onCreate}) {
	const input = useInputValue('');

	function submitHandler(event) {
		event.preventDefault();

		if(input.value()) {
			onCreate(input.value());
			input.clear();
		}
	}

	return (
		<form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
			<input type="text" {...input.bind} />
			<button type="submit">Add todo</button>
		</form>
	);
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired
}
export default AddTodo;
