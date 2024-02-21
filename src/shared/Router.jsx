import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import EditDetail from '../pages/EditDetail';
import SignUp from '../pages/SignUp';
import AuthLayout from './AuthLayout';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route element={<AuthLayout />}>
					<Route path="/home" element={<Home />} />
					<Route path="detail/:id" element={<Detail />} />
					<Route path="editdetail/:id" element={<EditDetail />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/editprofile" element={<EditProfile />} />
				</Route>
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
