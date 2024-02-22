import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import EditDetail from '../pages/EditDetail';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import { useSelector } from 'react-redux';
import Layout from '../components/common/Layout';

function Router() {
	const isLogin = useSelector((state) => state.authReducer.isLogin);
	return (
		<BrowserRouter>
			<Routes>
				{isLogin ? (
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="detail/:id" element={<Detail />} />
						<Route path="editdetail/:id" element={<EditDetail />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/editprofile" element={<EditProfile />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</Route>
				) : (
					<Route>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="*" element={<Navigate replace to="/login" />} />
					</Route>
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
