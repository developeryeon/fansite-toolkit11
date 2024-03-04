import userAPI from '../api/userAPI';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

function SignUp() {
	const navigate = useNavigate();
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');

	const idInputHandler = (e) => {
		const { value } = e.target;
		setId(value);
	};

	const pwdInputHandler = (e) => {
		const { value } = e.target;
		setPassword(value);
	};

	const nicknameInputHandler = (e) => {
		const { value } = e.target;
		setNickname(value);
	};

	const joinUsHandler = async (e) => {
		e.preventDefault();
		try {
			// 유효성 검사
			if (id.length < 4 || id.length > 10 || password.length < 4 || password.length > 15 || nickname.length < 1 || nickname.length > 10) {
				console.error('아이디는 4~10글자, 비밀번호는 4~15글자, 닉네임은 1~10글자여야 합니다.');
				return;
			}

			const response = await userAPI.post('/register', { id, password, nickname });
			console.log('회원가입 요청 : ', response);
			navigate('/login');
		} catch (error) {
			toast(error.response.data.message);
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
					<Input type="text" name="id" value={id} onChange={idInputHandler} placeholder="아이디 4~10글자를 입력해주세요." minLength={4} maxLength={10} />
				</div>
				<div>
					<Input type="password" name="password" value={password} onChange={pwdInputHandler} placeholder="비밀번호 4~15글자를 입력해주세요." minLength={4} maxLength={15} />
				</div>
				<div>
					<Input type="text" name="nickname" value={nickname} onChange={nicknameInputHandler} placeholder="닉네임 1~10글자를 입력해주세요." minLength={1} maxLength={10} />
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
