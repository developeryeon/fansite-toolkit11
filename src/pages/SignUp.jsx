import userAPI from '../api/userAPI';

function SignUp() {
	const handleSignUp = async (e) => {
		e.preventDefault();
		const { id, password, nickname } = e.target;
		const response = await userAPI.post('/register', {
			id: id.value,
			password: password.value,
			nickname: nickname.value,
		});
		console.log(response);
	};

	return (
		<section>
			<h1>회원 가입</h1>
			<form onSubmit={handleSignUp}>
				<p>
					<label>아이디</label>
					<input type="text" name="id" minLength={4} maxLength={10}></input>
				</p>
				<p>
					<label>비밀번호</label>
					<input type="password" name="password" minLength={4} maxLength={15}></input>
				</p>
				<p>
					<label>닉네임</label>
					<input type="text" name="nickname" minLength={1} maxLength={10}></input>
				</p>
				<button>회원가입</button>
				<button type="button">로그인</button>
			</form>
		</section>
	);
}

export default SignUp;
