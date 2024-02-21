import { createSlice } from '@reduxjs/toolkit';

const initialState = '유재석';

const memberSlice = createSlice({
	name: 'member',
	initialState,
	reducers: {
		setMember: (state, action) => {
			const activeMember = action.payload;
			return activeMember;
		},
	},
});

export default memberSlice.reducer;
