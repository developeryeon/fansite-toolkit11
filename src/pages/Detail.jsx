import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Detail() {
	const { id } = useParams();
	const navigate = useNavigate();

	const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
	const [comment, setComment] = useState(storedComments);

	const findComments = comment.find((card) => card.id === id);

	const onDeleteHandler = (id) => {
		const confirmDelete = window.confirm('삭제하시겠습니까?');

		if (confirmDelete) {
			const filteredComments = comment.filter((card) => card.id !== id);
			localStorage.setItem('comments', JSON.stringify(filteredComments));
			navigate('/');
		}
	};

	const homeBtnClickHandler = () => {
		navigate('/home');
		window.location.reload();
	};

	return (
		<DetailWrap>
			<HomeBtn onClick={homeBtnClickHandler}>홈으로</HomeBtn>
			<DetailArticle>
				<div>
					<DetailHeader>
						{/* <img>아이디 이미지</img> */}
						<HeaderH1>{findComments?.nickname}</HeaderH1>
						<time>{findComments?.createdAt}</time>
					</DetailHeader>
					<DetailBody>
						<p>To: {findComments?.writedTo}</p>
						<p> {findComments?.content}</p>
					</DetailBody>
				</div>
				<DetailBtnWrap>
					<EditBtn onClick={() => navigate(`/editdetail/${id}`)}>수정</EditBtn>
					<DeleteBtn onClick={() => onDeleteHandler(id)}>삭제</DeleteBtn>
				</DetailBtnWrap>
			</DetailArticle>
		</DetailWrap>
	);
}

const DetailWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const DetailArticle = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 700px;
	background-color: lightgray;
	color: #777;
	padding: 16px;
	overflow: hidden;
	line-height: 1.5;
`;

const HomeBtn = styled.button`
	position: absolute;
	top: 37px;
	left: 39px;
	width: 100px;
	height: 50px;
	color: #fff;
	background-color: #000;
	box-shadow: 2px 6px 7px gray;
	&:hover {
		cursor: pointer;
		background-color: purple;
		border: 1px solid purple;
	}
`;

const DetailHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderH1 = styled.h1`
	display: flex;
	justify-content: space-between;
	font-size: 30px;
	font-weight: bold;
`;

const DetailBody = styled.div`
	padding: 16px;
	font-size: 24px;
	line-height: 48px;
	border-radius: 10px;
	margin: 24px auto 10px auto;
	background-color: #000;
	color: white;
	width: 90%;
	height: 350px;
`;

const DetailBtnWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const EditBtn = styled.button`
	background-color: #111;
	color: #fff;
	border: none;
	border-radius: 5px;
	height: 40px;
	width: 60px;
	margin: 5px;
	&:hover {
		background-color: #f362a6;
		color: #fff;
		cursor: pointer;
	}
`;

const DeleteBtn = styled.button`
	background-color: #fff;
	color: #333;
	border: 1px solid #58c0e9;
	border-radius: 5px;
	margin: 5px;
	height: 40px;
	width: 60px;
	&:hover {
		background-color: #58c0e9;
		color: #fff;
		cursor: pointer;
	}
`;
