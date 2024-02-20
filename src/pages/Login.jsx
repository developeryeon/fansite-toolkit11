import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __login } from '../redux/modules/AuthSlice';
import { useNavigate } from 'react-router-dom';
import userAPI from '../api/userAPI';

export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [inLogin, setInLogin] = useState(true);
	const togglePage = () => {
		setInLogin(!inLogin);
	};

	const [joinInfo, setJoinInfo] = useState({
		id: 'yeon123',
		password: '123456',
		nickname: 'loginTest1',
	});

	const [loginInfo, setLoginInfo] = useState({
		id: 'yeon789',
		password: '987651',
		nickname: 'loginTest22',
	});

	const joinUser = async (e) => {
		e.preventDefault();
		const { data } = await userAPI.post('/resister', joinInfo);
		console.log(data);
	};

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			const { data } = await userAPI.post('/login', loginInfo);
			console.log(data);
			console.log('로그인 응답값 확인해보자구!');
			localStorage.setItem('token', data.accessToken);
		} catch (error) {
			console.error('로그인 에러:', error);
		}
	};

	// const [formData, setFormData] = useState({
	// 	id: '',
	// 	password: '',
	// 	nickname: '',
	// });
	// const { id, password, nickname } = formData;

	// const handleInputChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setFormData((prev) => ({
	// 		...prev,
	// 		[name]: value,
	// 	}));
	// };

	// const handleAuth = async (event) => {
	// 	event.preventDefault();
	// 	try {
	// 		if (inLogin) {
	// 			// 로그인 요청
	// 			if (!id || !password) return alert('아이디와 비밀번호는 필수값입니다.');
	// 			await dispatch(__login({ id, password }));
	// 			navigate('/home');
	// 		} else {
	// 			// 회원가입 요청
	// 			if (!id || !password || !nickname) return alert('아이디, 비밀번호, 닉네임은 필수값입니다.');

	// 			// 회원가입 성공 시 로그인 모드로 전환
	// 			setInLogin(true);
	// 		}
	// 	} catch (error) {
	// 		console.error('비동기 작업 중 에러 발생ㅠㅡㅠ :', error);
	// 	}
	// };

	return (
		<>
			{inLogin ? (
				<div>
					로그인
					<input type="text" placeholder="아이디" minLength={4} maxLength={10} />
					<input type="password" placeholder="비밀번호" minLength={4} maxLength={15} />
					<button onClick={loginUser}>로그인</button>
					<button onClick={togglePage}>회원가입</button>
				</div>
			) : (
				<div>
					회원가입
					<input type="text" placeholder="아이디" minLength={4} maxLength={10} />
					<input type="password" placeholder="비밀번호" minLength={4} maxLength={15} />
					<input type="nickname" placeholder="닉네임" minLength={4} maxLength={15} />
					<button onClick={loginUser}>로그인</button>
					<button onClick={togglePage}>회원가입</button>
				</div>
			)}
		</>
	);

	// return (
	// 	<form onSubmit={handleAuth}>
	// 		<h1>{inLogin ? '로그인' : '회원가입'}</h1>
	// 		<input type="text" name="id" placeholder="아이디 (4~10글자)" minLength={4} maxLength={10} value={id} onChange={handleInputChange} autoFocus />
	// 		<input type="password" name="password" placeholder="비밀번호 (4~15글자)" minLength={4} maxLength={15} value={password} onChange={handleInputChange} />
	// 		{!inLogin && <input type="text" name="nickname" placeholder="닉네임 (1~10글자)" minLength={1} maxLength={10} value={nickname} onChange={handleInputChange} />}
	// 		{/* <button type="submit">{inLogin ? '로그인' : '회원가입'}</button> */}
	// 		{/* <button type="button" onClick={() => setInLogin((prev) => !prev)}>
	// 			{inLogin ? '회원가입으로 전환' : '로그인으로 전환'}
	// 		</button> */}
	// 	</form>
	// );
}
