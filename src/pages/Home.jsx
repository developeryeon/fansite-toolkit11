import Header from '../components/Header';
import LetterList from '../components/LetterList';
import { logout } from '../redux/modules/AuthSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div>
			<Header />
			<button onClick={handleLogout}>로그아웃</button>
			<LetterList />
		</div>
	);
}
