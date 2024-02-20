import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthLayout() {
	const auth = useSelector((state) => state.AuthSlice.users);
	const token = localStorage.getItem('accessToken');

	if (!token) {
		return <Navigate to={'/login'} />;
	}
	if (!auth) {
		return <Navigate to={'/signup'} />;
	}

	return (
		<>
			<Outlet />
		</>
	);
}
