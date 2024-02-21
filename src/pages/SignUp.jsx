import userAPI from '../api/userAPI';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {
	const navigate = useNavigate();

	const [signupInfo, setSignupInfo] = useState({
		id: '',
		password: '',
		nickname: '',
	});

	// const { id, password, nickname } = signupInfo;

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setSignupInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const joinUsHandler = async (e) => {
		e.preventDefault();
		try {
			const { id, password, nickname } = e.target;
			const { data } = await userAPI.post('/register', {
				id: id.value,
				password: password.value,
				nickname: nickname.value,
			});

			console.log('회원가입 response : ', data);
			navigate('/login');
		} catch (error) {
			console.error('sign-up 에러에요!');
		}
	};

	const handleLogin = () => {
		navigate('/login');
	};

	return (
		<Container>
			<Title>JOIN</Title>
			<Form onSubmit={joinUsHandler}>
				<div>
					<Input type="text" name="id" value={signupInfo.id} onChange={onChangeHandler} placeholder="아이디 4~10글자를 입력해주세요." minLength={4} maxLength={10} />
				</div>
				<div>
					<Input type="password" name="password" value={signupInfo.password} onChange={onChangeHandler} placeholder="비밀번호 4~15글자를 입력해주세요." minLength={4} maxLength={15} />
				</div>
				<div>
					<Input type="text" name="nickname" value={signupInfo.nickname} onChange={onChangeHandler} placeholder="닉네임 1~10글자를 입력해주세요." minLength={1} maxLength={10} />
				</div>
				<ButtonWrapper>
					<Button type="submit">회원가입 완료</Button>
					<Button type="button" onClick={handleLogin}>
						취소
					</Button>
				</ButtonWrapper>
			</Form>
		</Container>
	);
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: linear-gradient(310deg, #e664, #9198e5), linear-gradient(180deg, black, black);
`;

const Title = styled.h2`
	font-size: 32px;
	margin-bottom: 100px;
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
	color: #fff;
`;

const Input = styled.input`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
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
export default SignUp;
