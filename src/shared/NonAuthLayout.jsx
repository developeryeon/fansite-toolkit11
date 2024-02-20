import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const NonAuthLayout = () => {
	//만약에 로그인이 되어있는 경우!

	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			navigate.push('/');
		}
	}, []);

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default NonAuthLayout;
