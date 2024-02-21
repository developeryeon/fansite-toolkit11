import CardSlice from '../modules/CardSlice';
import AuthSlice from '../modules/AuthSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	CardSlice,
	AuthSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

// const store = configureStore({
// 	reducer: { CardSlice, AuthSlice },
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: false,
// 		}),
// });

export default store;
