import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	isLoggedIn: false,
};

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			// 액션 객체에 로그인에 필요한 사용자 정보가 payload로 전달
			const user = action.payload;
			state.user = user;
			state.isLoggedIn = true;
		},
		logout(state) {
			state.user = null;
			state.isLoggedIn = false;
		},
		// 회원가입 처리 역할
		register(state, action) {
			const user = action.payload;
			state.user = user;
			// 회원 가입 후 사용자를 로그인 상태로 설정함
			state.isLoggedIn = true;
		},
	},
});

export const { login, logout, register } = AuthSlice.actions;
export default AuthSlice.reducer;
