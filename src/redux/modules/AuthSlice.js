import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from '../../api/userAPI';
import { useDispatch } from 'react-redux';

const initialState = {
	users: {
		userId: localStorage.getItem('userId'),
		nickname: localStorage.getItem('nickname'),
		avatar: localStorage.getItem('avatar'),
		// accessToken: localStorage.getItem('accessToken'),
	},
	isLogin: !!localStorage.getItem('accessToken'),
	error: null,
};

//로그인 요청
export const __login = createAsyncThunk('users/login', async (payload, thunkAPI) => {
	try {
		const { data } = await userAPI.post('/login', payload);
		console.log(data);
		return thunkAPI.fulfillWithValue(data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

// 회원가입 요청
export const __register = createAsyncThunk('users/register', async (payload, thunkAPI) => {
	try {
		const { data } = await userAPI.post('/register', payload);
		console.log(data);
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
			// state.users = null;
			localStorage.removeItem('userId');
			localStorage.removeItem('nickname');
			localStorage.removeItem('avatar');
			localStorage.removeItem('accessToken');
			state.users = {};
			state.isLogin = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(__login.pending, (state) => {
				state.isLogin = true;
				state.error = null;
			})
			.addCase(__login.fulfilled, (state, action) => {
				state.isLogin = true;
				state.users = action.payload;
				const { userId, accessToken, nickname } = action.payload;
				localStorage.setItem('userId', userId);
				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('nickname', nickname);
			})
			.addCase(__login.rejected, (state, action) => {
				state.isLogin = false;
				state.error = action.payload.response.data.message;
			});
	},
});

export const authReducer = AuthSlice.reducer;

export const { login, logout, register } = AuthSlice.actions;
export default AuthSlice.reducer;
