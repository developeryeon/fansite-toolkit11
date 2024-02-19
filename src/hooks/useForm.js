import { useState } from 'react';

const initialState = {
	id: '',
	password: '',
	nickname: '',
};

const useForm = () => {
	// state
	const [formValue, setFormValue] = useState(initialState);

	// handler
	const formInputChangeHandler = (name, value) => {
		setFormValue({ ...formValue, [name]: value });
	};

	const formResetHandler = () => {
		setFormValue(initialState);
	};

	return { formValue, formInputChangeHandler, formResetHandler };
};

export default useForm;
