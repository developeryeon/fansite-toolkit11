import { useState } from 'react';

const useForm = (initialState = {}) => {
	const [loginInfo, setLoginInfo] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginInfo((prev) => ({ ...prev, [name]: value }));
	};

	const resetForm = () => {
		setLoginInfo(initialState);
	};

	return { loginInfo, handleChange, resetForm };
};

export default useForm;
