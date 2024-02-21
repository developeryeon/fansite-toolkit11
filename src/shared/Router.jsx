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

function Router() {
	const isLogin = useSelector((state) => state.AuthSlice.isLogin);
	return (
		<BrowserRouter>
			<Routes>
				{isLogin ? (
					<>
						<Route path="/" element={<Home />} />
						<Route path="detail/:id" element={<Detail />} />
						<Route path="editdetail/:id" element={<EditDetail />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/editprofile" element={<EditProfile />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</>
				) : (
					<>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="*" element={<Navigate replace to="/login" />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
