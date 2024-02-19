import AuthSlice from '../modules/AuthSlice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});
const store = configureStore({
	reducer: {
		AuthSlice,
	},
});

export default store;
