import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/modules/AuthSlice';
import styled from 'styled-components';

function Layout() {
	// const isLogin = useSelector((state) => state.users.isLogin);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!isLogin) {
	// 		navigate('/login');
	// 	}
	// }, [isLogin, navigate]);

	return (
		<>
			<div>
				<Header>
					<Link to="/">Home</Link>
					<Section>
						<Link to="/profile">
							<div>내 프로필</div>
						</Link>

						<Link onClick={() => dispatch(logout())}>로그아웃</Link>
					</Section>
				</Header>
			</div>
			<Outlet />
		</>
	);
}

export default Layout;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px 30px;
	height: 30px;
	background-color: purple;
	user-select: none;
	& a {
		text-decoration: none;
		color: #ffffff;
	}
	& div div:nth-child(2) {
		margin-left: 30px;
	}
`;

const Section = styled.section`
	display: flex;
	& a {
		margin-right: 8px;
	}
`;
