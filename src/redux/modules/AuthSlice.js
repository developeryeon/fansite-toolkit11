import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from '../../api/userAPI';
import { useDispatch } from 'react-redux';

const initialState = {
	users: {
		userId: localStorage.getItem('userId'),
		nickname: localStorage.getItem('nickname'),
		avatar: localStorage.getItem('avatar'),
		accessToken: localStorage.getItem('accessToken'),
	},
	isLoading: false,
	error: null,
};

//로그인 요청
export const __login = createAsyncThunk('users/login', async (payload, thunkAPI) => {
	try {
		const { data } = await userAPI.post('/login', payload);
		console.log(data);
		return thunkAPI.fulfillWithValue(data);
		// 왜 data.data => data로 바꾸니까 갑자기 error가 없어졌지?
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

// 프로필
export const userData = () => async (dispatch, getState) => {
	try {
		const accessToken = getState('/users').users.accessToken;
		const response = await userAPI.get('/users', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		dispatch({ type: 'USER_DATA_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'USER_DATA_FAILED', payload: error.message });
	}
};

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
				state.error = action.payload.response.data.message;
			});
	},
});

export const authReducer = AuthSlice.reducer;

export const { login, logout, register } = AuthSlice.actions;
export default AuthSlice.reducer;
