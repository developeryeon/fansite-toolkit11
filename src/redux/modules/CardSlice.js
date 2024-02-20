import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import lettersAPI from '../../api/letters';

const initialState = {
	letters: [],
	isLoading: false,
	error: null,
};

export const __addCards = createAsyncThunk('letters/add', async (payload, thunkAPI) => {
	try {
		const { data } = await lettersAPI.post('/letters', payload);
		return thunkAPI.fulfillWithValue(data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getCards = createAsyncThunk('letters/get', async (payload, thunkAPI) => {
	try {
		const data = await lettersAPI.get('/letters');
		return thunkAPI.fulfillWithValue(data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __updateCards = createAsyncThunk('letters/update', async (payload, thunkAPI) => {
	try {
		const { data } = await lettersAPI.patch(`/letters/${payload.id}`, payload);
		return thunkAPI.fulfillWithValue(data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __deleteCards = createAsyncThunk('letters/delete', async (payload, thunkAPI) => {
	try {
		const { data } = await lettersAPI.delete(`/letters/${payload}`);
		return thunkAPI.fulfillWithValue(data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const CardSlice = createSlice({
	name: 'letters',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(__addCards.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(__addCards.fulfilled, (state, action) => {
				state.letters.push(action.payload);
			})
			.addCase(__addCards.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		builder
			.addCase(__getCards.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(__getCards.fulfilled, (state, action) => {
				state.letters = action.payload;
			})
			.addCase(__getCards.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		builder
			.addCase(__updateCards.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(__updateCards.fulfilled, (state, action) => {
				state.letters = state.letters.map((letter) => (letter.id === action.payload.id ? action.payload : letter));
			})
			.addCase(__updateCards.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		builder
			.addCase(__deleteCards.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(__deleteCards.fulfilled, (state, action) => {
				state.letters = state.letters.filter((letter) => letter.id !== action.payload.id);
			})
			.addCase(__deleteCards.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { addCards, getCards, updateCards, deleteCards } = CardSlice.actions;
export default CardSlice.reducer;
