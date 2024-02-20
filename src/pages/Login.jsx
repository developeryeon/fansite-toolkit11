import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __login } from '../redux/modules/AuthSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const { nickname, userId } = useSelector((state) => state.user);
	const [formData, setFormData] = useState({
		id: '',
		password: '',
		nickname: '',
	});
	const { id, password, nickname } = formData;

	const [inLogin, setInLogin] = useState(true);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleAuth = async (event) => {
		event.preventDefault();
		try {
			if (inLogin) {
				// 로그인 요청
				if (!id || !password) return alert('아이디와 비밀번호는 필수값입니다.');
				await dispatch(__login({ id, password }));
				navigate('/home');
			} else {
				// 회원가입 요청
				if (!id || !password || !nickname) return alert('아이디, 비밀번호, 닉네임은 필수값입니다.');

				// 회원가입 성공 시 로그인 모드로 전환
				setInLogin(true);
			}
		} catch (error) {
			console.error('비동기 작업 중 에러 발생ㅠㅡㅠ :', error);
		}
	};

	return (
		<form onSubmit={handleAuth}>
			<h1>{inLogin ? '로그인' : '회원가입'}</h1>
			<input type="text" name="id" placeholder="아이디 (4~10글자)" minLength={4} maxLength={10} value={id} onChange={handleInputChange} autoFocus />
			<input type="password" name="password" placeholder="비밀번호 (4~15글자)" minLength={4} maxLength={15} value={password} onChange={handleInputChange} />
			{!inLogin && <input type="text" name="nickname" placeholder="닉네임 (1~10글자)" minLength={1} maxLength={10} value={nickname} onChange={handleInputChange} />}
			<button type="submit">{inLogin ? '로그인' : '회원가입'}</button>
			<button type="button" onClick={() => setInLogin((prev) => !prev)}>
				{inLogin ? '회원가입으로 전환' : '로그인으로 전환'}
			</button>
		</form>
	);
}

// import { loginAsync, signupAsync } from '../redux/modules/AuthSlice';
// import { useDispatch } from 'react-redux';
// import React, { useState } from 'react';

// export default function Login() {
// 	const [enterLogin, setEnterLogin] = useState(true);
// 	const [existingUser, setExistingUser] = useState(false);
// 	const [userId, setUserId] = useState('');
// 	const [userPwd, setUserPwd] = useState('');
// 	const [userName, setUserName] = useState('');

// 	const dispatch = useDispatch();

// 	const onChangeIdHandler = (e) => {
// 		const { value } = e.target;
// 		setUserId(value);
// 		console.log(value);
// 	};

// 	const onChangePwdHandler = (e) => {
// 		const { value } = e.target;
// 		setUserPwd(value);
// 		console.log(value);
// 	};

// 	const onChangeNickname = (e) => {
// 		const { value } = e.target;
// 		setUserName(value);
// 		console.log(value);
// 	};

// 	const onSubmitHandler = async (e) => {
// 		e.preventDefault();
// 		if (enterLogin) {
// 			// 아이디가 기존에 존재하는가?
// 			if (existingUser) {
// 				// 로그인 처리
// 				dispatch(loginAsync({ id: userId, password: userPwd }));
// 			} else {
// 				//회원가입 페이지로 이동
// 				console.log('회원가입 페이지로 이동');
// 			}
// 		} else {
// 			// 회원가입 처리
// 			dispatch(signupAsync({ id: userId, password: userPwd, nickname: userName }));
// 		}
// 	};

// 	return (
// 		<div>
// 			<form onSubmit={onSubmitHandler}>
// 				<title>{enterLogin ? '로그인' : '회원가입'}</title>
// 				<input type="text" name="id" value={userId} onChange={onChangeIdHandler} placeholder="아이디 4~10글자를 입력해주세요" />
// 				<input type="password" name="password" value={userPwd} onChange={onChangePwdHandler} placeholder="비밀번호 4~15글자를 입력해주세요" />
// 				<input name="nickname" value={userName} onChange={onChangeNickname} placeholder="닉네임 1~10글자를 입력해주세요" />

// 				{existingUser ? (
// 					<button type="button" onClick={() => setEnterLogin(false)}>
// 						회원가입
// 					</button>
// 				) : (
// 					<button type="button" onClick={() => setEnterLogin(true)}>
// 						로그인하기
// 					</button>
// 				)}

// 				<></>
// 			</form>
// 		</div>
// 	);
// }
