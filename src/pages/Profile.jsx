import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { avatar, nickname, userId } = useSelector((state) => state.auth);

	const [isEditing, setIsEditing] = useState(false);
	const [editingText, setEditingText] = useState('');
	const [file, setFile] = useState(null);
	// const [selectedImg, setSelectedImg] = useState(avatar);

	const previewImg = (e) => {
		const imgFile = e.target.files[0];
		if (imgFile.size > 1024 * 1024) {
			return toast.warn('최대 1MB까지 업로드 가능합니다.');
		}
		setFile(imgFile);
		// Fire -> Url 형식으로 변환
		const imgUrl = URL.createObjectURL(imgFile);
		// setSelectedImg(imgUrl);
	};

	const onEditDone = () => {
		//TODO: 프로필 변경 요청
		const formData = new FormData();
		if (editingText) {
			formData.append('nickname', editingText);
		}
		// if (selectedImg !== '') {
		// 	formData.append('avatar', selectedImg);
		// }
		toast.success('프로필 변경이 완료!');
	};

	const editProfileHandler = () => {
		navigate('/editprofile');
	};

	return (
		<>
			<ProfileWrapper>
				<Title>프로필 관리</Title>
				{/* <label>
					<Avatar src={profileData.avatar} size="large" id="imgInput" />
					<input onChange={previewImg} type="file" accept="image/*" />
				</label> */}
				{/* {isEditing ? <input name="editing" maxLength={10} placeholder="최대 10글자 가능" autoFocus defaultValue={profileData.nickname} onChange={(event) => setEditingNickname(event.target.value)} /> : <Nickname>{profileData.nickname}</Nickname>} */}
				{isEditing ? <input name="editing" maxLength={10} placeholder="최대 10글자 가능" autoFocus /> : <Nickname></Nickname>}
				<button onClick={editProfileHandler}>수정하기</button>
				{/* <Id>{profileData.id}</Id> */}
				<BtnsWrapper>
					{isEditing ? (
						<>
							<Button text="취소" onClick={() => setIsEditing(false)} />
							{/* <Button text="수정완료" onClick={onEditDone} disabled={!editingNickname && !imgFile} /> */}
							<Button text="수정완료" onClick={onEditDone} />
						</>
					) : (
						<Button text="수정하기" onClick={() => setIsEditing(true)} />
					)}
				</BtnsWrapper>
			</ProfileWrapper>
		</>
	);
}

const Container = styled.section`
	background-color: gray;
`;

const ProfileWrapper = styled.main`
	width: 500px;
	background-color: lightgray;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;
	border-radius: 12px;

	& h1 {
		font-size: 36px;
		font-weight: 700;
	}

	& input[type='file'] {
		display: none;
	}

	& input[name='editing'] {
		outline: none;
		padding: 12px;
	}
`;

const Title = styled.button`
	font-size: 20px;
`;

const Nickname = styled.span`
	font-size: 24px;
	font-weight: 700;
`;

const Id = styled.span`
	font-size: 18px;
	color: gray;
`;

const BtnsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 12px;
`;

const Button = styled.button`
	padding: 30px;
`;
