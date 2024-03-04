import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AuthLayout = () => {
	const [isRendered, setIsRendered] = useState(false);
	const accessToken = localStorage.getItem('accessToken');
	const isLoggedin = useSelector((state) => state.authReducer.isLogin);
	const auth = useSelector((state) => state.authReducer);
	console.log(auth);

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');

		// 컴포넌트 렌더링
		setIsRendered(true);
	}, [isRendered]);

	if (!isLoggedin) {
		toast.warning('로그인이 필요한 페이지입니다.');
		return <Navigate to="/login" replace />;
	}

	return (
		<div>
			{/* 하위컴포넌트들이 렌더링됨 => Home,Detail*/}
			<Outlet />
		</div>
	);
};

export default AuthLayout;
