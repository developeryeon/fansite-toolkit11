import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import userAPI from '../api/userAPI';
import { useSelector } from 'react-redux';

function Profile() {
	const navigate = useNavigate();

	const editProfileHandler = () => {
		navigate('/editprofile');
	};

	return (
		<Container>
			<Title>프로필 관리</Title>
			<button onClick={editProfileHandler}>수정하기</button>
		</Container>
	);
}

export default Profile;

const Container = styled.section`
	background-color: gray;
`;

const Title = styled.button`
	font-size: 20px;
`;
