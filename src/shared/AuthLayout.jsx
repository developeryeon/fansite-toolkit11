import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthLayout() {
	const auth = useSelector((state) => state.AuthSlice.users);
	console.log('auth/token test : ', auth);

	if (!auth) {
		return <Navigate to={'/signup'} />;
	}

	return (
		<>
			<Outlet />
		</>
	);
}
