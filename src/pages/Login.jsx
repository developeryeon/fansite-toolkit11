import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __login } from '../redux/modules/AuthSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loginInfo, setLoginInfo] = useState({
		id: '',
		password: '',
	});

	const { id, password } = loginInfo;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const loginUser = async (e) => {
		e.preventDefault();
		if (!id || !password) return alert('아이디와 비밀번호는 필수값입니다.');

		try {
			const response = await dispatch(__login(loginInfo));
			alert('로그인 하셨습니다.');
			const { success, userId, accessToken, nickname } = response.payload;
			if (success) {
				console.log('로그인 성공!');
				localStorage.setItem('userId', userId);
				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('nickname', nickname);
				navigate('/'); // 비밀번호가 맞으면 홈 화면
			} else {
				alert('비밀번호가 일치하지 않습니다.');
			}
		} catch (error) {
			console.error('로그인 에러:', error);
		}
	};

	const handleSignUp = () => {
		navigate('/signup');
	};

	return (
		<Container>
			<Title>LOGIN</Title>
			<Form onSubmit={loginUser}>
				<Input type="text" placeholder="아이디 4~10글자를 입력해주세요." name="id" value={loginInfo.id} onChange={handleChange} />
				<Input type="password" placeholder="비밀번호 4~15글자를 입력해주세요." name="password" value={loginInfo.password} onChange={handleChange} />
				<ButtonWrapper>
					<Button type="submit">로그인</Button>
					<Button type="button" onClick={handleSignUp}>
						회원가입 하시겠습니까?
					</Button>
				</ButtonWrapper>
			</Form>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: linear-gradient(310deg, #e664, #9198e5), linear-gradient(180deg, black, black);
`;

const Title = styled.h1`
	font-size: 33px;
	margin-bottom: 36px;
	color: #fff;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 60px 15px;
	border-radius: 12px;
	background-color: transparent;
	width: 500px;
	height: 200px;
`;

const Input = styled.input`
	margin-bottom: 24px;
	padding: 20px 0;
	width: 390px;
	border: none;
	border-radius: 17px;
	outline: none;
	opacity: 0.5;
	text-indent: 20px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	border-radius: 12px;
	padding: 15px;
	width: 200px;
	margin-top: 30px;
	margin-right: 10px;
	font-size: 13px;
	border: none;
	background-color: #af074d;
	color: white;
	cursor: pointer;

	&:hover {
		background-color: #ff6b81;
	}
`;

// 수정
// const onUpdateBtnClickHandler = async() => {
// 	axios.patch(`http://localhost:4001/todos/${targetId}`, {
// 		id:loginInfo,
// 		//타겟 ID를 찾아내서 id를 loginInfo에 들어간 내용으로 바꿔준다.
// 	})
// }

// 	// return (
// 	// 	<form onSubmit={handleAuth}>
// 	// 		<h1>{inLogin ? '로그인' : '회원가입'}</h1>
// 	// 		<input type="text" name="id" placeholder="아이디 (4~10글자)" minLength={4} maxLength={10} value={id} onChange={handleInputChange} autoFocus />
// 	// 		<input type="password" name="password" placeholder="비밀번호 (4~15글자)" minLength={4} maxLength={15} value={password} onChange={handleInputChange} />
// 	// 		{!inLogin && <input type="text" name="nickname" placeholder="닉네임 (1~10글자)" minLength={1} maxLength={10} value={nickname} onChange={handleInputChange} />}
// 	// 		{/* <button type="submit">{inLogin ? '로그인' : '회원가입'}</button> */}
// 	// 		{/* <button type="button" onClick={() => setInLogin((prev) => !prev)}>
// 	// 			{inLogin ? '회원가입으로 전환' : '로그인으로 전환'}
// 	// 		</button> */}
// 	// 	</form>
// 	// );
// }
