import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function NonAuthLayout() {
	// 만약에 로그인이 되어있는 경우
	// =>  Home 페이지로 이동
	const [isRendered, setIsRendered] = useState(false);
	const navigator = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			navigator('/');
			setIsRendered(true);
		}
	}, [isRendered]);

	return (
		<div>
			{/* 하위컴포넌트들이 렌더링됨 =>login*/}
			<Outlet />
		</div>
	);
}
