import CardSlice from '../modules/CardSlice';
import AuthSlice from '../modules/AuthSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: { CardSlice, AuthSlice },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
