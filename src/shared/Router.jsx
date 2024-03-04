import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import EditDetail from '../pages/EditDetail';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import AuthLayout from './AuthLayout';
import NonAuthLayout from './NonAuthLayout';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{/*로그인이 반드시 필요 */}
				<Route element={<AuthLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="detail/:id" element={<Detail />} />
					<Route path="editdetail/:id" element={<EditDetail />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/editprofile" element={<EditProfile />} />
					<Route path="*" element={<Navigate replace to="/" />} />
				</Route>

				{/* 이미 로그인이 되었다면 접근 X */}
				<Route element={<NonAuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="*" element={<Navigate replace to="/login" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
