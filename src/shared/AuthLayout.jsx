import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthLayout() {
	const auth = useSelector((state) => state.AuthSlice.users);
	console.log('auth/token test : ', auth);

	// 사용자 인증 여부
	const isAuthenticated = () => {
		const token = localStorage.getItem('accessToken');
		return !token;
	};

	if (!auth) {
		return <Navigate to={'/signup'} />;
	}

	return (
		<>
			<Outlet />
			{/* return isAuthenticated() ? <Outlet /> : <Navigate to="/signup" />; */}
		</>
	);
}
