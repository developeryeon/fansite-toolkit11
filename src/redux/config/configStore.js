import CardSlice from '../modules/CardSlice';
import AuthSlice, { authReducer } from '../modules/AuthSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	CardSlice,
	auth: AuthSlice.reducer,
	authReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
