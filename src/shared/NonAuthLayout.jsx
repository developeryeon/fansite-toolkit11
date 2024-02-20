import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element, ...rest }) => {
	const token = useSelector((state) => state.auth.token); // Redux 상태에서 토큰 가져오기

	return <Route {...rest} element={token ? element : <Navigate to="/login" replace />} />;
};

export default ProtectedRoute;

// import { useEffect } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';

// const NonAuthLayout = () => {
// 	//만약에 로그인이 되어있는 경우!

// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		const token = localStorage.getItem('accessToken');
// 		if (token) {
// 			navigate.push('/');
// 		}
// 	}, [navigate]);

// 	return (
// 		<div>
// 			<Outlet />
// 		</div>
// 	);
// };

// export default NonAuthLayout;
