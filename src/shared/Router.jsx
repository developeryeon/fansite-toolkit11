import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import EditDetail from '../pages/EditDetail';
import SignUp from '../pages/SignUp';
import AuthLayout from './AuthLayout';
import NonAuthLayout from './NonAuthLayout';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NonAuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="detail/:id" element={<Detail />} />
					<Route path="editdetail/:id" element={<EditDetail />} />
				</Route>
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
