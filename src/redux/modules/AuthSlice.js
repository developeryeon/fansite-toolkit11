import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from '../../api/userAPI';
import axios from 'axios';

const initialState = {
	users: {
		userId: localStorage.getItem('userId'),
		nickname: localStorage.getItem('nickname'),
	},
	isLoading: false,
	error: null,
};

export const __login = createAsyncThunk('user/login', async (payload, thunkAPI) => {
	try {
		const data = await userAPI.post('/users', payload);
		// 로그인이 성공하면 서버에서 받은 데이터를 반환
		return thunkAPI.fulfillWithValue(data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

// slice 생성
const AuthSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		login: (state, action) => {
			state.users = action.payload;
		},
		logout: (state) => {
			state.users = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(__login.pending, (state) => {
				state.isLoading = true;
				state.error = null; // 요청이 시작되면 에러를 초기화합니다.
			})
			.addCase(__login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.users = action.payload;
			})
			.addCase(__login.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
	},
});

export const authReducer = AuthSlice.reducer;

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
