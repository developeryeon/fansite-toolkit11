import axios from 'axios';
import { login } from '../redux/modules/AuthSlice';
import React, { useEffect, useState } from 'react';
import useForm from '../hooks/useForm';

export default function Login() {
	const [enterLogin, setEnterLogin] = useState(true);

	const fetchUsers = async () => {
		const { data } = await axios.get('http://localhost:4001/users');
		console.log('data : ', data);
		setEnterLogin(data);
	};

	const { formValue, formInputChangeHandler, formResetHandler } = useForm({
		id: '',
		password: '',
		nickname: '',
	});

	const { id, password, nickname } = formValue;

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		if (enterLogin) {
			// if (!id || password) return null;
			console.log('enterLogin : ', enterLogin);
			return null;
		}
	};

	useEffect(() => {
		//db로부터 값을 가져올 것이다.
		fetchUsers();
	}, []);

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<title>{enterLogin ? '로그인' : '회원가입'}</title>
				<input type="text" name="id" value={formValue.id} onChange={(e) => formInputChangeHandler('id', e.target.value)} placeholder="아이디 4~10글자를 입력해주세요" />
				<input type="password" name="password" value={formValue.password} onChange={(e) => formInputChangeHandler('password', e.target.value)} placeholder="비밀번호 4~15글자를 입력해주세요" />
				<input name="nickname" value={formValue.nickname} onChange={(e) => formInputChangeHandler('nickname', e.target.value)} placeholder="닉네임 1~10글자를 입력해주세요" />
				<button type="submit">{enterLogin ? '로그인' : '회원가입'}</button>
				<></>
			</form>
		</div>
	);
}
